import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const { initialProducts, products, totalValue } = JSON.parse(
	jsonLine.replace('Results JSON:', '').trim(),
)

await test('Products array should have correct typed structure', () => {
	assert.strictEqual(
		initialProducts[0].name,
		'Laptop',
		'🚨 products[0].name should be "Laptop" - access nested properties using dot notation after array indexing',
	)
	assert.strictEqual(
		initialProducts[0].price,
		999.99,
		'🚨 products[0].price should be 999.99 - access the price property of the first product object',
	)
	assert.strictEqual(
		initialProducts[0].inStock,
		true,
		'🚨 products[0].inStock should be true - access the inStock property of the first product object',
	)
	assert.strictEqual(
		initialProducts.length,
		3,
		'🚨 products.length should be 3 - check that you have three product objects in the array',
	)
})

await test('Adding to arrays with push increases length', () => {
	assert.strictEqual(
		products.length,
		4,
		'🚨 products.length should be 4 - push adds one item to the array',
	)
	assert.strictEqual(
		products[3].name,
		'Monitor',
		'🚨 products[3].name should be "Monitor" - the new item is at the end of the array',
	)
})

await test('Total inventory value calculation with a loop', () => {
	assert.strictEqual(
		totalValue,
		1409.96,
		'🚨 totalValue should be 1409.96 - use a loop to sum all product prices (999.99 + 29.99 + 79.99 + 299.99)',
	)
})
