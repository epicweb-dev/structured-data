import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('Products array should have correct typed structure', () => {
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
	]
	assert.strictEqual(
		products[0].name,
		'Laptop',
		'🚨 products[0].name should be "Laptop" - access nested properties using dot notation after array indexing',
	)
	assert.strictEqual(
		products[0].price,
		999.99,
		'🚨 products[0].price should be 999.99 - access the price property of the first product object',
	)
	assert.strictEqual(
		products[0].inStock,
		true,
		'🚨 products[0].inStock should be true - access the inStock property of the first product object',
	)
	assert.strictEqual(
		products.length,
		3,
		'🚨 products.length should be 3 - check that you have three product objects in the array',
	)
})

await test('Adding to arrays with spread creates a new array', () => {
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
	]
	const allProducts = [
		...products,
		{ name: 'Monitor', price: 299.99, inStock: true },
	]
	assert.strictEqual(
		products.length,
		3,
		'🚨 Original products array should still have 3 items - spread creates a new array without modifying the original',
	)
	assert.strictEqual(
		allProducts.length,
		4,
		'🚨 allProducts.length should be 4 - the new array contains the original items plus the new one',
	)
	assert.strictEqual(
		allProducts[3].name,
		'Monitor',
		'🚨 allProducts[3].name should be "Monitor" - the new item is at the end of the new array',
	)
})

await test('Total inventory value calculation with reduce', () => {
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
		{ name: 'Monitor', price: 299.99, inStock: true },
	]
	const totalValue = products.reduce((sum, product) => sum + product.price, 0)
	assert.strictEqual(
		totalValue,
		1409.96,
		'🚨 totalValue should be 1409.96 - use reduce to sum all product prices (999.99 + 29.99 + 79.99 + 299.99)',
	)
})
