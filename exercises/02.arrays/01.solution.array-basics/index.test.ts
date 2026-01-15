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
		'🚨 products should include "Laptop" - make sure you started with the initial products',
	)
	assert.ok(
		solution.products.includes('Mouse'),
		'🚨 products should include "Mouse" - make sure you started with the initial products',
	)
	assert.ok(
		solution.products.includes('Keyboard'),
		'🚨 products should include "Keyboard" - make sure you started with the initial products',
	)
})

await test('Products array should have Monitor added via push', () => {
	assert.strictEqual(
		solution.products.length,
		4,
		'🚨 products.length should be 4 after push - push() adds an element to the end of the array',
	)
	assert.ok(
		solution.products.includes('Monitor'),
		'🚨 products should include "Monitor" - use push() to add it to the array',
	)
	assert.strictEqual(
		solution.products[solution.products.length - 1],
		'Monitor',
		'🚨 products[products.length - 1] should be "Monitor" - push adds to the end of the array',
	)
})

await test('Products array should access first and last elements correctly', () => {
	assert.strictEqual(
		solution.products[0],
		'Laptop',
		'🚨 products[0] should be "Laptop" - the first element is at index 0',
	)
	assert.strictEqual(
		solution.products[solution.products.length - 1],
		'Monitor',
		'🚨 products[products.length - 1] should be "Monitor" - use length - 1 to get the last element',
	)
})
