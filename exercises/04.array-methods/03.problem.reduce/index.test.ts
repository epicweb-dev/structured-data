import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('Reduce should calculate total price correctly', () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics' },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen' },
		{ name: 'Headphones', price: 149.99, category: 'Electronics' },
		{ name: 'Blender', price: 49.99, category: 'Kitchen' },
		{ name: 'Monitor', price: 299.99, category: 'Electronics' },
	]
	const total = products.reduce((sum, p) => sum + p.price, 0)
	assert.strictEqual(
		total,
		1579.95,
		'🚨 total should be 1579.95 - use reduce() to sum all product prices, starting with initial value 0',
	)
})

await test('Reduce should find most expensive product correctly', () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics' },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen' },
		{ name: 'Headphones', price: 149.99, category: 'Electronics' },
		{ name: 'Blender', price: 49.99, category: 'Kitchen' },
		{ name: 'Monitor', price: 299.99, category: 'Electronics' },
	]
	const mostExpensive = products.reduce(
		(max, p) => (p.price > max.price ? p : max),
		products[0],
	)
	assert.strictEqual(
		mostExpensive.name,
		'Laptop',
		'🚨 mostExpensive.name should be "Laptop" - use reduce() to find the product with the highest price',
	)
	assert.strictEqual(
		mostExpensive.price,
		999.99,
		'🚨 mostExpensive.price should be 999.99 - compare prices in the reduce accumulator to find the maximum',
	)
})

await test('Reduce should count products by category correctly', () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics' },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen' },
		{ name: 'Headphones', price: 149.99, category: 'Electronics' },
		{ name: 'Blender', price: 49.99, category: 'Kitchen' },
		{ name: 'Monitor', price: 299.99, category: 'Electronics' },
	]
	const countByCategory = products.reduce(
		(acc, p) => {
			acc[p.category] = (acc[p.category] || 0) + 1
			return acc
		},
		{} as Record<string, number>,
	)
	assert.strictEqual(
		countByCategory['Electronics'],
		3,
		'🚨 countByCategory["Electronics"] should be 3 - use reduce() to count products by category, incrementing the count for each category',
	)
	assert.strictEqual(
		countByCategory['Kitchen'],
		2,
		'🚨 countByCategory["Kitchen"] should be 2 - accumulate counts in an object using reduce()',
	)
})
