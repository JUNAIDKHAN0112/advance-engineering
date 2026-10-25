import assert from 'node:assert/strict';
import { test } from 'node:test';
const expected = `rill magnetic-separator vibro-screener-open-type gravity-de-stoner gravity-separator drum-sieve centrifugal-besan-grader twin-psyllium-chakki pulse-splitter-machine dal-dryer huller-machine rubber-roll-machine brush-roll-polisher polisher-machine pulverizer-machine emery-roll-machine vibro-dal-cooler twin-atta-chakki c-type-bucket-elevator belt-conveyor z-bucket-elevator intake-hoppers bulk-vacuum-conveying-system vibro-aspiration-channel air-box double-airlock vertical-cyclone-separator pulse-processing-plant rice-processing-plant besan-mill-plant whole-wheat-flour-plant seed-cleaning-plant`.split(' ');
const catalogue = await import('../src/data/catalogue.js').catch(() => null);
const scope = await import('../src/data/catalogueScope.js').catch(() => null);
const education = await import('../src/data/processGuides.js').catch(() => null);
test('only the exact 32 screenshot-selected products are public', () => {
  assert.ok(catalogue, 'The approved catalogue module must exist');
  assert.deepEqual(catalogue.products.map(p => p.slug).sort(), [...expected].sort());
  assert.equal(new Set(catalogue.products.map(p => p.slug)).size, 32);
});
test('five category pages have correct membership counts', () => {
  assert.ok(scope && catalogue, 'The category scope must exist');
  assert.equal(scope.categoryDefinitions.length, 5);
  assert.deepEqual(scope.categoryDefinitions.map(c => catalogue.products.filter(p => p.category === c.name).length), [6,12,5,4,5]);
});
test('every retained product has substantive detail, no made-up numeric specification', () => {
  assert.ok(catalogue, 'The approved catalogue must exist');
  for (const p of catalogue.products) {
    assert.ok(p.description.length > 70, p.slug);
    assert.ok(p.workingPrinciple.length > 70, p.slug);
    for (const key of ['applications','materials','designPoints','considerations']) assert.ok(p[key].length >= 2, `${p.slug}: ${key}`);
    assert.ok(!/\d+\s*(kg\/h|tph|hp|kw|%)/i.test(JSON.stringify(p)), p.slug);
  }
});
test('five substantive process guides link only to retained machines and plants', () => {
  assert.ok(education && catalogue, 'Process guides must exist');
  assert.equal(education.processGuides.length, 5);
  const active = new Set(expected);
  const plants = catalogue.products.filter(p => p.category === 'Turnkey plants').map(p => p.slug);
  assert.deepEqual(education.processGuides.map(g => g.productSlug).sort(), plants.sort());
  for (const g of education.processGuides) {
    assert.ok(g.steps.length >= 5, g.slug);
    assert.ok(g.faqs.length >= 3, g.slug);
    assert.ok(g.references.length > 0, g.slug);
    for (const id of g.machines) assert.ok(active.has(id), `${g.slug} links removed ${id}`);
    for (const s of g.steps) assert.ok(s.title && s.text.length > 40, g.slug);
    for (const ref of g.references) assert.match(ref.url, /^https:\/\//);
  }
});
test('pulse explanation distinguishes dry seeds, whole pulses and dal', () => {
  assert.ok(education, 'Pulse education must exist');
  assert.match(education.pulseDefinition, /dry|dried/i);
  assert.match(education.pulseDefinition, /legume/i);
  assert.match(education.pulseDefinition, /dal/i);
  for (const name of ['Chana','Toor','Moong','Urad','Masoor','Dry peas']) assert.ok(education.pulseExamples.some(e => e.name.includes(name)), name);
});
