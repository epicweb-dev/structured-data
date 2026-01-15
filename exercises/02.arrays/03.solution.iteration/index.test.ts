import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { products, inStockProducts, expensiveCount } = JSON.parse(
	jsonLine.replace('Results JSON:', '').trim(),
)

await test('Products array should have correct structure', () => {
	assert.strictEqual(
		products.length,
		5,
		'🚨 products.length should be 5 - verify you have five product objects in the array',
	)
	assert.strictEqual(
		products[0].name,
		'Laptop',
		'🚨 products[0].name should be "Laptop" - access the name property of the first product',
	)
	assert.strictEqual(
		products[4].name,
		'Webcam',
		'🚨 products[4].name should be "Webcam" - access the name property of the last product (index 4)',
	)
})

await test('In-stock products filtering should work', () => {
	assert.strictEqual(
		inStockProducts.length,
		3,
		'🚨 inStockProducts.length should be 3 - filter products where inStock is true (Laptop, Mouse, Monitor)',
	)
	assert.strictEqual(
		inStockProducts.every((p: { inStock: boolean }) => p.inStock),
		true,
		'🚨 All inStockProducts should have inStock === true - verify your filter condition checks inStock property',
	)
})

await test('Expensive products count should work', () => {
	assert.strictEqual(
		expensiveCount,
		3,
		'🚨 expensiveCount should be 3 - count products where price > 50 (Laptop, Keyboard, Monitor)',
	)
})
