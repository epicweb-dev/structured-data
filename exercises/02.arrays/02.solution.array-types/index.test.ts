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

await test('Adding to arrays with push increases length', () => {
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
	]
	products.push({ name: 'Monitor', price: 299.99, inStock: true })
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
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
		{ name: 'Monitor', price: 299.99, inStock: true },
	]
	let totalValue = 0
	for (let i = 0; i < products.length; i++) {
		const product = products[i]
		totalValue += product.price
	}
	assert.strictEqual(
		totalValue,
		1409.96,
		'🚨 totalValue should be 1409.96 - use a loop to sum all product prices (999.99 + 29.99 + 79.99 + 299.99)',
	)
})
