import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('electronics is exported', () => {
	assert.ok(
		'electronics' in solution,
		'🚨 Make sure you export "electronics" - add: export { electronics, ... }',
	)
})

await test('affordable is exported', () => {
	assert.ok(
		'affordable' in solution,
		'🚨 Make sure you export "affordable" - add: export { affordable, ... }',
	)
})

await test('available is exported', () => {
	assert.ok(
		'available' in solution,
		'🚨 Make sure you export "available" - add: export { available, ... }',
	)
})

await test('inStockElectronicsUnder500 is exported', () => {
	assert.ok(
		'inStockElectronicsUnder500' in solution,
		'🚨 Make sure you export "inStockElectronicsUnder500" - add: export { inStockElectronicsUnder500, ... }',
	)
})

await test('Filter should filter electronics correctly', () => {
	assert.strictEqual(
		solution.electronics.length,
		3,
		'🚨 electronics.length should be 3 - use filter() to keep only products where category === "Electronics"',
	)
	assert.deepStrictEqual(
		solution.electronics.map((p) => p.name),
		['Laptop', 'Headphones', 'Monitor'],
		'🚨 electronics should contain ["Laptop", "Headphones", "Monitor"] - filter products by category property',
	)
})

await test('Filter should filter affordable products correctly', () => {
	assert.strictEqual(
		solution.affordable.length,
		2,
		'🚨 affordable.length should be 2 - use filter() to keep only products where price < 100',
	)
	assert.deepStrictEqual(
		solution.affordable.map((p) => p.name),
		['Coffee Maker', 'Blender'],
		'🚨 affordable should contain ["Coffee Maker", "Blender"] - filter products by price comparison',
	)
})

await test('Filter should filter in-stock products correctly', () => {
	assert.strictEqual(
		solution.available.length,
		4,
		'🚨 available.length should be 4 - use filter() to keep only products where inStock === true',
	)
	assert.ok(
		solution.available.every((p) => p.inStock),
		'🚨 All available products should have inStock === true - verify your filter condition checks the inStock property',
	)
})

await test('Chained filters should work correctly', () => {
	assert.deepStrictEqual(
		solution.inStockElectronicsUnder500,
		['Monitor'],
		'🚨 inStockElectronicsUnder500 should be ["Monitor"] - chain multiple filters: inStock, then category === "Electronics", then price < 500',
	)
})
