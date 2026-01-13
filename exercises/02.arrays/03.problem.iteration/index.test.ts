import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('Products array should have correct structure', () => {
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
		{ name: 'Monitor', price: 299.99, inStock: true },
		{ name: 'Webcam', price: 49.99, inStock: false },
	]
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
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
		{ name: 'Monitor', price: 299.99, inStock: true },
		{ name: 'Webcam', price: 49.99, inStock: false },
	]
	const inStockProducts: { name: string; price: number; inStock: boolean }[] =
		[]
	for (const product of products) {
		if (product.inStock) {
			inStockProducts.push(product)
		}
	}
	assert.strictEqual(
		inStockProducts.length,
		3,
		'🚨 inStockProducts.length should be 3 - filter products where inStock is true (Laptop, Mouse, Monitor)',
	)
	assert.strictEqual(
		inStockProducts.every((p) => p.inStock),
		true,
		'🚨 All inStockProducts should have inStock === true - verify your filter condition checks inStock property',
	)
})

await test('Expensive products count should work', () => {
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
		{ name: 'Monitor', price: 299.99, inStock: true },
		{ name: 'Webcam', price: 49.99, inStock: false },
	]
	let expensiveCount = 0
	for (const product of products) {
		if (product.price > 50) {
			expensiveCount++
		}
	}
	assert.strictEqual(
		expensiveCount,
		3,
		'🚨 expensiveCount should be 3 - count products where price > 50 (Laptop, Keyboard, Monitor)',
	)
})
