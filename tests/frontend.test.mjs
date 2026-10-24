import assert from "node:assert/strict";
import { test, after } from "node:test";
import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { PassThrough } from "node:stream";
import { StaticRouter } from "react-router-dom/server.js";
import { createServer } from "vite";

const server = await createServer({
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true, include: [] },
  appType: "custom",
});
after(() => server.close());
async function render(element) {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    let html = "";
    output.on("data", (chunk) => {
      html += chunk;
    });
    output.on("end", () => resolve(html));
    const stream = renderToPipeableStream(element, {
      onAllReady() {
        stream.pipe(output);
      },
      onError: reject,
    });
  });
}
const { products } = await server.ssrLoadModule("/src/data/catalogue.js");
assert.equal(products.length, 63, "Expanded machinery catalogue should include all 63 entries");
assert.equal(new Set(products.map((product) => product.slug)).size, products.length, "Machine URLs must remain unique");
const paths = [
  "/",
  "/about",
  "/services",
  "/machines",
  "/quote",
  ...products.map((product) => `/${product.slug}`),
];
for (const path of paths) {
  test(`${path} renders one main landmark, one page heading and one footer`, async () => {
    const { default: App } = await server.ssrLoadModule("/src/App.jsx");
    assert.equal(
      typeof App,
      "function",
      "The website must expose its complete routed application",
    );
    const html = await render(
      React.createElement(
        StaticRouter,
        { location: path },
        React.createElement(App),
      ),
    );
    assert.equal((html.match(/<main[\s>]/g) || []).length, 1);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
    assert.equal((html.match(/<footer[\s>]/g) || []).length, 1);
    assert.ok(
      !html.includes("**"),
      "Raw Markdown must not appear in rendered pages",
    );
    assert.ok(
      !html.includes('href="nationalengineering'),
      "Email links need the mailto protocol",
    );
  });
}
test("machine enquiries preserve the selected product and provide a working email destination", async () => {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const html = await render(
    React.createElement(
      StaticRouter,
      { location: "/destoner" },
      React.createElement(App),
    ),
  );
  assert.ok(html.includes("/quote?machine=destoner"));
  assert.ok(html.includes("mailto:nationalengineering973@gmail.com"));
});
test("unrecognised URLs offer an intentional recovery page", async () => {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const html = await render(
    React.createElement(
      StaticRouter,
      { location: "/missing-page" },
      React.createElement(App),
    ),
  );
  assert.ok(html.includes("Page not found"));
  assert.ok(html.includes("Return home"));
});

test("expanded catalogue contains original, unbranded listings and preserved original products", () => {
  assert.equal(products.filter((item) => item.category === "Turnkey plants").length, 12);
  for (const product of products) {
    assert.ok(product.slug && product.name && product.summary && product.description);
    assert.ok(product.applications.length > 0 && product.considerations.length > 0);
    assert.ok(!/nice engineering/i.test(JSON.stringify(product)));
  }
  assert.ok(products.some((product) => product.slug === "destoner"));
  assert.ok(products.some((product) => product.slug === "pulse-processing-plant"));
});
