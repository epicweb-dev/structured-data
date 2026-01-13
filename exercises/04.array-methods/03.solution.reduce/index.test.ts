import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('Reduce should calculate total price correctly', async () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics' },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen' },
		{ name: 'Headphones', price: 149.99, category: 'Electronics' },
		{ name: 'Blender', price: 49.99, category: 'Kitchen' },
		{ name: 'Monitor', price: 299.99, category: 'Electronics' },
	]
	const total = products.reduce((sum, p) => sum + p.price, 0)
	expect(
		total,
		'🚨 total should be 1579.95 - use reduce() to sum all product prices, starting with initial value 0',
	).toBe(1579.95)
})

await testStep(
	'Reduce should find most expensive product correctly',
	async () => {
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
		expect(
			mostExpensive.name,
			'🚨 mostExpensive.name should be "Laptop" - use reduce() to find the product with the highest price',
		).toBe('Laptop')
		expect(
			mostExpensive.price,
			'🚨 mostExpensive.price should be 999.99 - compare prices in the reduce accumulator to find the maximum',
		).toBe(999.99)
	},
)

await testStep(
	'Reduce should count products by category correctly',
	async () => {
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
		expect(
			countByCategory['Electronics'],
			'🚨 countByCategory["Electronics"] should be 3 - use reduce() to count products by category, incrementing the count for each category',
		).toBe(3)
		expect(
			countByCategory['Kitchen'],
			'🚨 countByCategory["Kitchen"] should be 2 - accumulate counts in an object using reduce()',
		).toBe(2)
	},
)
