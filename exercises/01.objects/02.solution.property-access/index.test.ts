import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('product is exported', () => {
	assert.ok(
		'product' in solution,
		'🚨 Make sure you export "product" - add: export { product, ... }',
	)
})

await test('Product object should have correct properties', () => {
	assert.strictEqual(
		solution.product.name,
		'TypeScript Handbook',
		'🚨 product.name should be "TypeScript Handbook"',
	)
	assert.strictEqual(
		solution.product['price'],
		29.99,
		'🚨 product["price"] should be 29.99',
	)
	assert.strictEqual(
		solution.product.inStock,
		true,
		'🚨 product.inStock should be true',
	)
	assert.strictEqual(
		solution.product.category,
		'Books',
		'🚨 product.category should be "Books"',
	)
})

await test('formatProduct is exported', () => {
	assert.ok(
		'formatProduct' in solution,
		'🚨 Make sure you export "formatProduct" - add: export { product, formatProduct }',
	)
})

await test('formatProduct should format product correctly', () => {
	const formatted = solution.formatProduct(solution.product)
	assert.strictEqual(
		formatted,
		'TypeScript Handbook - $29.99',
		'🚨 formatProduct should return "TypeScript Handbook - $29.99"',
	)
})
