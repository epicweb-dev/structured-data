import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('Map should extract product names correctly', () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics' },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen' },
		{ name: 'Headphones', price: 149.99, category: 'Electronics' },
		{ name: 'Blender', price: 49.99, category: 'Kitchen' },
	]
	const names = products.map((p) => p.name)
	assert.deepStrictEqual(
		names,
		['Laptop', 'Coffee Maker', 'Headphones', 'Blender'],
		'🚨 names should be ["Laptop", "Coffee Maker", "Headphones", "Blender"] - use map() to extract the name property from each product',
	)
	assert.strictEqual(
		names.length,
		4,
		'🚨 names.length should be 4 - map() returns an array with the same length as the original',
	)
})

await test('Map should format prices correctly', () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics' },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen' },
		{ name: 'Headphones', price: 149.99, category: 'Electronics' },
		{ name: 'Blender', price: 49.99, category: 'Kitchen' },
	]
	const prices = products.map((p) => `$${p.price.toFixed(2)}`)
	assert.deepStrictEqual(
		prices,
		['$999.99', '$79.99', '$149.99', '$49.99'],
		'🚨 prices should be ["$999.99", "$79.99", "$149.99", "$49.99"] - use map() to format each price with a dollar sign and toFixed(2)',
	)
})

await test('Map should create summary objects correctly', () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics' },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen' },
		{ name: 'Headphones', price: 149.99, category: 'Electronics' },
		{ name: 'Blender', price: 49.99, category: 'Kitchen' },
	]
	const summary = products.map((p) => ({
		name: p.name,
		priceLabel: `$${p.price}`,
	}))
	assert.deepStrictEqual(
		summary,
		[
			{ name: 'Laptop', priceLabel: '$999.99' },
			{ name: 'Coffee Maker', priceLabel: '$79.99' },
			{ name: 'Headphones', priceLabel: '$149.99' },
			{ name: 'Blender', priceLabel: '$49.99' },
		],
		'🚨 summary should contain objects with name and priceLabel - use map() to transform each product into a new object shape',
	)
})
