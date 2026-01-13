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
	expect(total).toBe(1579.95)
})

await testStep('Reduce should find most expensive product correctly', async () => {
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
	expect(mostExpensive.name).toBe('Laptop')
	expect(mostExpensive.price).toBe(999.99)
})

await testStep('Reduce should count products by category correctly', async () => {
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
	expect(countByCategory['Electronics']).toBe(3)
	expect(countByCategory['Kitchen']).toBe(2)
})
