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
		'🚨 products[0].name should be "Laptop"',
	)
	assert.strictEqual(
		solution.products[0].price,
		999.99,
		'🚨 products[0].price should be 999.99',
	)
	assert.strictEqual(
		solution.products[0].inStock,
		true,
		'🚨 products[0].inStock should be true',
	)
	assert.strictEqual(
		solution.products.length,
		4,
		'🚨 products.length should be 4 after the starting three products plus Monitor',
	)
})

await test('Adding to arrays with push increases length', () => {
	assert.strictEqual(
		solution.products.length,
		4,
		'🚨 products.length should be 4',
	)
	assert.strictEqual(
		solution.products[3].name,
		'Monitor',
		'🚨 products[3].name should be "Monitor"',
	)
})

await test('Total inventory value calculation with a loop', () => {
	assert.strictEqual(
		solution.totalValue,
		1409.96,
		'🚨 totalValue should be 1409.96 (999.99 + 29.99 + 79.99 + 299.99)',
	)
})
