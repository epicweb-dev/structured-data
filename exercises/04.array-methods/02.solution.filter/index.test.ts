import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('Filter should filter electronics correctly', async () => {
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
	expect(
		electronics.length,
		'🚨 electronics.length should be 3 - use filter() to keep only products where category === "Electronics"',
	).toBe(3)
	expect(
		electronics.map((p) => p.name),
		'🚨 electronics should contain ["Laptop", "Headphones", "Monitor"] - filter products by category property',
	).toEqual(['Laptop', 'Headphones', 'Monitor'])
})

await testStep(
	'Filter should filter affordable products correctly',
	async () => {
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
		expect(
			affordable.length,
			'🚨 affordable.length should be 2 - use filter() to keep only products where price < 100',
		).toBe(2)
		expect(
			affordable.map((p) => p.name),
			'🚨 affordable should contain ["Coffee Maker", "Blender"] - filter products by price comparison',
		).toEqual(['Coffee Maker', 'Blender'])
	},
)

await testStep('Filter should filter in-stock products correctly', async () => {
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
	expect(
		available.length,
		'🚨 available.length should be 4 - use filter() to keep only products where inStock === true',
	).toBe(4)
	expect(
		available.every((p) => p.inStock),
		'🚨 All available products should have inStock === true - verify your filter condition checks the inStock property',
	).toBe(true)
})

await testStep('Chained filters should work correctly', async () => {
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
	expect(
		inStockElectronicsUnder500,
		'🚨 inStockElectronicsUnder500 should be ["Monitor"] - chain multiple filters: inStock, then category === "Electronics", then price < 500',
	).toEqual(['Monitor'])
})
