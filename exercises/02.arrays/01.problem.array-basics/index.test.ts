import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('Products array should have correct initial values', () => {
	const products: Array<string> = ['Laptop', 'Mouse', 'Keyboard']
	assert.strictEqual(
		products[0],
		'Laptop',
		'🚨 products[0] should be "Laptop" - arrays are zero-indexed, so [0] is the first element',
	)
	assert.strictEqual(
		products[1],
		'Mouse',
		'🚨 products[1] should be "Mouse" - use index 1 to access the second element',
	)
	assert.strictEqual(
		products[2],
		'Keyboard',
		'🚨 products[2] should be "Keyboard" - use index 2 to access the third element',
	)
	assert.strictEqual(
		products.length,
		3,
		'🚨 products.length should be 3 - the length property tells you how many elements are in the array',
	)
})

await test('Products array should support push operation', () => {
	const products: string[] = ['Laptop', 'Mouse', 'Keyboard']
	products.push('Monitor')
	assert.strictEqual(
		products.length,
		4,
		'🚨 products.length should be 4 after push - push() adds an element to the end of the array',
	)
	assert.strictEqual(
		products[3],
		'Monitor',
		'🚨 products[3] should be "Monitor" - after push, the new element is at the end of the array',
	)
	assert.strictEqual(
		products[products.length - 1],
		'Monitor',
		'🚨 products[products.length - 1] should be "Monitor" - use length - 1 to access the last element',
	)
})

await test('Products array should access first and last elements correctly', () => {
	const products: Array<string> = ['Laptop', 'Mouse', 'Keyboard', 'Monitor']
	assert.strictEqual(
		products[0],
		'Laptop',
		'🚨 products[0] should be "Laptop" - the first element is at index 0',
	)
	assert.strictEqual(
		products[products.length - 1],
		'Monitor',
		'🚨 products[products.length - 1] should be "Monitor" - use length - 1 to get the last element',
	)
})
