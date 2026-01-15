import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { initialProducts, products, first, last, initialCount } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('Products array should have correct initial values', () => {
	assert.strictEqual(
		initialProducts[0],
		'Laptop',
		'🚨 products[0] should be "Laptop" - arrays are zero-indexed, so [0] is the first element',
	)
	assert.strictEqual(
		initialProducts[1],
		'Mouse',
		'🚨 products[1] should be "Mouse" - use index 1 to access the second element',
	)
	assert.strictEqual(
		initialProducts[2],
		'Keyboard',
		'🚨 products[2] should be "Keyboard" - use index 2 to access the third element',
	)
	assert.strictEqual(
		initialCount,
		3,
		'🚨 products.length should be 3 - the length property tells you how many elements are in the array',
	)
})

await test('Products array should support push operation', () => {
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
		last,
		'Monitor',
		'🚨 products[products.length - 1] should be "Monitor" - use length - 1 to access the last element',
	)
})

await test('Products array should access first and last elements correctly', () => {
	assert.strictEqual(
		first,
		'Laptop',
		'🚨 products[0] should be "Laptop" - the first element is at index 0',
	)
	assert.strictEqual(
		last,
		'Monitor',
		'🚨 products[products.length - 1] should be "Monitor" - use length - 1 to get the last element',
	)
})
