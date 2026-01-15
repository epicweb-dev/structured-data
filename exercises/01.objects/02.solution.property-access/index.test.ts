import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { product, formatted } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('Product object should have correct properties', () => {
	assert.strictEqual(
		product.name,
		'TypeScript Handbook',
		'🚨 product.name should be "TypeScript Handbook" - use dot notation to access the name property',
	)
	assert.strictEqual(
		product['price'],
		29.99,
		'🚨 product["price"] should be 29.99 - use bracket notation to access the price property',
	)
	assert.strictEqual(
		product.inStock,
		true,
		'🚨 product.inStock should be true - access the inStock property using dot notation',
	)
	assert.strictEqual(
		product.category,
		'Books',
		'🚨 product.category should be "Books" - make sure you access the category property correctly',
	)
})

await test('formatProduct should format product correctly', () => {
	assert.strictEqual(
		formatted,
		'TypeScript Handbook - $29.99',
		'🚨 formatProduct should return "TypeScript Handbook - $29.99" - check that you access name and price properties correctly in the function',
	)
})
