import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('products is exported', () => {
	assert.ok(
		'products' in solution,
		'🚨 Make sure you export "products" - add: export { products, ... }',
	)
})

await test('totalValue is exported', () => {
	assert.ok(
		'totalValue' in solution,
		'🚨 Make sure you export "totalValue" - add: export { totalValue, ... }',
	)
})

await test('Products array should have correct typed structure', () => {
	assert.strictEqual(
		solution.products[0].name,
		'Laptop',
		'🚨 products[0].name should be "Laptop" - access nested properties using dot notation after array indexing',
	)
	assert.strictEqual(
		solution.products[0].price,
		999.99,
		'🚨 products[0].price should be 999.99 - access the price property of the first product object',
	)
	assert.strictEqual(
		solution.products[0].inStock,
		true,
		'🚨 products[0].inStock should be true - access the inStock property of the first product object',
	)
	assert.strictEqual(
		solution.products.length,
		4,
		'🚨 products.length should be 4 - check that you have three starting products then push a fourth',
	)
})

await test('Adding to arrays with push increases length', () => {
	assert.strictEqual(
		solution.products.length,
		4,
		'🚨 products.length should be 4 - push adds one item to the array',
	)
	assert.strictEqual(
		solution.products[3].name,
		'Monitor',
		'🚨 products[3].name should be "Monitor" - the new item is at the end of the array',
	)
})

await test('Total inventory value calculation with a loop', () => {
	assert.strictEqual(
		solution.totalValue,
		1409.96,
		'🚨 totalValue should be 1409.96 - use a loop to sum all product prices (999.99 + 29.99 + 79.99 + 299.99)',
	)
})
