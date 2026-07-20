import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('products is exported', () => {
	assert.ok(
		'products' in solution,
		'🚨 Make sure you export "products" - add: export { products }',
	)
})

await test('Products array should have correct initial values', () => {
	assert.ok(
		solution.products.includes('Laptop'),
		'🚨 products should include "Laptop"',
	)
	assert.ok(
		solution.products.includes('Mouse'),
		'🚨 products should include "Mouse"',
	)
	assert.ok(
		solution.products.includes('Keyboard'),
		'🚨 products should include "Keyboard"',
	)
})

await test('Products array should have Monitor added via push', () => {
	assert.strictEqual(
		solution.products.length,
		4,
		'🚨 products.length should be 4 after adding Monitor',
	)
	assert.ok(
		solution.products.includes('Monitor'),
		'🚨 products should include "Monitor" at the end after adding it',
	)
	assert.strictEqual(
		solution.products[solution.products.length - 1],
		'Monitor',
		'🚨 products[products.length - 1] should be "Monitor"',
	)
})

await test('Products array should access first and last elements correctly', () => {
	assert.strictEqual(
		solution.products[0],
		'Laptop',
		'🚨 products[0] should be "Laptop"',
	)
	assert.strictEqual(
		solution.products[solution.products.length - 1],
		'Monitor',
		'🚨 products[products.length - 1] should be "Monitor"',
	)
})
