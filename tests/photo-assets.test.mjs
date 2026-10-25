import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { test } from "node:test";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { productPhotoRegistry, productImageSrc } from "../src/data/productPhotoRegistry.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const folder = path.join(root, "public", "product-photos");
const webp = (slug) => path.join(folder, `${slug}.webp`);
const hash = (buffer) => createHash("sha256").update(buffer).digest("hex");

// An empty photo folder is acceptable while work is still in the draft PR.
// Publishing status is NOT: every ready product requires its checked asset.
test("every photo has one unique machine, source and intended output", () => {
  assert.equal(productPhotoRegistry.length, 13);
  const unique = (selector) => new Set(productPhotoRegistry.map(selector)).size;
  assert.equal(unique((p) => p.slug), productPhotoRegistry.length, "product slug reused");
  assert.equal(unique((p) => p.machine), productPhotoRegistry.length, "machine identity reused");
  assert.equal(unique((p) => p.sourceFile), productPhotoRegistry.length, "photo reused");
  assert.equal(unique((p) => p.sourceSha256), productPhotoRegistry.length, "source image duplicated");
  assert.equal(unique((p) => p.assetSha256), productPhotoRegistry.length, "processed photo duplicated");
  for (const item of productPhotoRegistry) {
    assert.match(item.sourceSha256, /^[0-9a-f]{64}$/);
    assert.match(item.assetSha256, /^[0-9a-f]{64}$/);
    assert.ok(["staged", "ready"].includes(item.status));
    if (item.kind === "render") assert.ok(["confirmed", "provisional"].includes(item.identity));
    assert.ok(existsSync(path.join(root,"public","product-images",`${item.slug}.svg`)),
      `missing fallback SVG for ${item.slug}`);
    if (item.status === "staged") {
      assert.equal(productImageSrc(item), `/product-images/${item.slug}.svg`);
    }
  }
});

test("published photos must exist, have the correct format and match the reviewed asset", () => {
  const known = new Map(productPhotoRegistry.map((p) => [p.slug,p]));
  const installed = existsSync(folder) ? readdirSync(folder).filter((p)=>p.endsWith(".webp")) : [];
  const actualHashes = new Set();
  for (const filename of installed) {
    const slug=filename.slice(0,-5);
    assert.ok(known.has(slug), `unreviewed machine photo: ${slug}`);
    const image=readFileSync(webp(slug));
    assert.equal(image.toString("ascii",0,4),"RIFF", `not a WebP: ${slug}`);
    assert.equal(image.toString("ascii",8,12),"WEBP", `not a WebP: ${slug}`);
    const digest=hash(image);
    assert.ok(!actualHashes.has(digest), `identical image reused: ${slug}`);
    actualHashes.add(digest);
    assert.equal(digest,known.get(slug).assetSha256,`wrong photo assigned to ${slug}`);
  }
  for (const item of productPhotoRegistry.filter((p)=>p.status === "ready")) {
    assert.ok(existsSync(webp(item.slug)),`published photo absent: ${item.slug}`);
  }
});
