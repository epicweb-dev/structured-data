import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('Filter should filter electronics correctly', async () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen', inStock: true },
		{ name: 'Headphones', price: 149.99, category: 'Electronics', inStock: false },
		{ name: 'Blender', price: 49.99, category: 'Kitchen', inStock: true },
		{ name: 'Monitor', price: 299.99, category: 'Electronics', inStock: true },
	]
	const electronics = products.filter((p) => p.category === 'Electronics')
	expect(electronics.length).toBe(3)
	expect(electronics.map((p) => p.name)).toEqual(['Laptop', 'Headphones', 'Monitor'])
})

await testStep('Filter should filter affordable products correctly', async () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen', inStock: true },
		{ name: 'Headphones', price: 149.99, category: 'Electronics', inStock: false },
		{ name: 'Blender', price: 49.99, category: 'Kitchen', inStock: true },
		{ name: 'Monitor', price: 299.99, category: 'Electronics', inStock: true },
	]
	const affordable = products.filter((p) => p.price < 100)
	expect(affordable.length).toBe(2)
	expect(affordable.map((p) => p.name)).toEqual(['Coffee Maker', 'Blender'])
})

await testStep('Filter should filter in-stock products correctly', async () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen', inStock: true },
		{ name: 'Headphones', price: 149.99, category: 'Electronics', inStock: false },
		{ name: 'Blender', price: 49.99, category: 'Kitchen', inStock: true },
		{ name: 'Monitor', price: 299.99, category: 'Electronics', inStock: true },
	]
	const available = products.filter((p) => p.inStock)
	expect(available.length).toBe(4)
	expect(available.every((p) => p.inStock)).toBe(true)
})

await testStep('Chained filters should work correctly', async () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen', inStock: true },
		{ name: 'Headphones', price: 149.99, category: 'Electronics', inStock: false },
		{ name: 'Blender', price: 49.99, category: 'Kitchen', inStock: true },
		{ name: 'Monitor', price: 299.99, category: 'Electronics', inStock: true },
	]
	const inStockElectronicsUnder500 = products
		.filter((p) => p.inStock)
		.filter((p) => p.category === 'Electronics')
		.filter((p) => p.price < 500)
		.map((p) => p.name)
	expect(inStockElectronicsUnder500).toEqual(['Monitor'])
})
