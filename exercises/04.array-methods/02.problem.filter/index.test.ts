import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('Filter should filter electronics correctly', () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen', inStock: true },
		{
			name: 'Headphones',
			price: 149.99,
			category: 'Electronics',
			inStock: false,
		},
		{ name: 'Blender', price: 49.99, category: 'Kitchen', inStock: true },
		{ name: 'Monitor', price: 299.99, category: 'Electronics', inStock: true },
	]
	const electronics = products.filter((p) => p.category === 'Electronics')
	assert.strictEqual(
		electronics.length,
		3,
		'🚨 electronics.length should be 3 - use filter() to keep only products where category === "Electronics"',
	)
	assert.deepStrictEqual(
		electronics.map((p) => p.name),
		['Laptop', 'Headphones', 'Monitor'],
		'🚨 electronics should contain ["Laptop", "Headphones", "Monitor"] - filter products by category property',
	)
})

await test('Filter should filter affordable products correctly', () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
		{
			name: 'Coffee Maker',
			price: 79.99,
			category: 'Kitchen',
			inStock: true,
		},
		{
			name: 'Headphones',
			price: 149.99,
			category: 'Electronics',
			inStock: false,
		},
		{ name: 'Blender', price: 49.99, category: 'Kitchen', inStock: true },
		{
			name: 'Monitor',
			price: 299.99,
			category: 'Electronics',
			inStock: true,
		},
	]
	const affordable = products.filter((p) => p.price < 100)
	assert.strictEqual(
		affordable.length,
		2,
		'🚨 affordable.length should be 2 - use filter() to keep only products where price < 100',
	)
	assert.deepStrictEqual(
		affordable.map((p) => p.name),
		['Coffee Maker', 'Blender'],
		'🚨 affordable should contain ["Coffee Maker", "Blender"] - filter products by price comparison',
	)
})

await test('Filter should filter in-stock products correctly', () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen', inStock: true },
		{
			name: 'Headphones',
			price: 149.99,
			category: 'Electronics',
			inStock: false,
		},
		{ name: 'Blender', price: 49.99, category: 'Kitchen', inStock: true },
		{ name: 'Monitor', price: 299.99, category: 'Electronics', inStock: true },
	]
	const available = products.filter((p) => p.inStock)
	assert.strictEqual(
		available.length,
		4,
		'🚨 available.length should be 4 - use filter() to keep only products where inStock === true',
	)
	assert.strictEqual(
		available.every((p) => p.inStock),
		true,
		'🚨 All available products should have inStock === true - verify your filter condition checks the inStock property',
	)
})

await test('Chained filters should work correctly', () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen', inStock: true },
		{
			name: 'Headphones',
			price: 149.99,
			category: 'Electronics',
			inStock: false,
		},
		{ name: 'Blender', price: 49.99, category: 'Kitchen', inStock: true },
		{ name: 'Monitor', price: 299.99, category: 'Electronics', inStock: true },
	]
	const inStockElectronicsUnder500 = products
		.filter((p) => p.inStock)
		.filter((p) => p.category === 'Electronics')
		.filter((p) => p.price < 500)
		.map((p) => p.name)
	assert.deepStrictEqual(
		inStockElectronicsUnder500,
		['Monitor'],
		'🚨 inStockElectronicsUnder500 should be ["Monitor"] - chain multiple filters: inStock, then category === "Electronics", then price < 500',
	)
})
