import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('products is exported', () => {
	assert.ok(
		'products' in solution,
		'🚨 Make sure you export "products" - add: export { products, ... }',
	)
})

await test('inStockProducts is exported', () => {
	assert.ok(
		'inStockProducts' in solution,
		'🚨 Make sure you export "inStockProducts" - add: export { inStockProducts, ... }',
	)
})

await test('expensiveCount is exported', () => {
	assert.ok(
		'expensiveCount' in solution,
		'🚨 Make sure you export "expensiveCount" - add: export { expensiveCount, ... }',
	)
})

await test('Products array should have correct structure', () => {
	assert.strictEqual(
		solution.products.length,
		5,
		'🚨 products.length should be 5 - verify you have five product objects in the array',
	)
	assert.strictEqual(
		solution.products[0].name,
		'Laptop',
		'🚨 products[0].name should be "Laptop" - access the name property of the first product',
	)
	assert.strictEqual(
		solution.products[4].name,
		'Webcam',
		'🚨 products[4].name should be "Webcam" - access the name property of the last product (index 4)',
	)
})

await test('In-stock products filtering should work', () => {
	assert.strictEqual(
		solution.inStockProducts.length,
		3,
		'🚨 inStockProducts.length should be 3 (Laptop, Mouse, Monitor)',
	)
	assert.strictEqual(
		solution.inStockProducts.every((p: { inStock: boolean }) => p.inStock),
		true,
		'🚨 Every item in inStockProducts should have inStock === true',
	)
})

await test('Expensive products count should work', () => {
	assert.strictEqual(
		solution.expensiveCount,
		3,
		'🚨 expensiveCount should be 3 for products with price > 50 (Laptop, Keyboard, Monitor)',
	)
})
