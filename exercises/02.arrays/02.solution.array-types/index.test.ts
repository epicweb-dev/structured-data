import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep(
	'Products array should have correct typed structure',
	async () => {
		const products: { name: string; price: number; inStock: boolean }[] = [
			{ name: 'Laptop', price: 999.99, inStock: true },
			{ name: 'Mouse', price: 29.99, inStock: true },
			{ name: 'Keyboard', price: 79.99, inStock: false },
		]
		expect(
			products[0].name,
			'🚨 products[0].name should be "Laptop" - access nested properties using dot notation after array indexing',
		).toBe('Laptop')
		expect(
			products[0].price,
			'🚨 products[0].price should be 999.99 - access the price property of the first product object',
		).toBe(999.99)
		expect(
			products[0].inStock,
			'🚨 products[0].inStock should be true - access the inStock property of the first product object',
		).toBe(true)
		expect(
			products.length,
			'🚨 products.length should be 3 - check that you have three product objects in the array',
		).toBe(3)
	},
)

await testStep('Adding to arrays with spread creates a new array', async () => {
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
	]
	const allProducts = [
		...products,
		{ name: 'Monitor', price: 299.99, inStock: true },
	]
	expect(
		products.length,
		'🚨 Original products array should still have 3 items - spread creates a new array without modifying the original',
	).toBe(3)
	expect(
		allProducts.length,
		'🚨 allProducts.length should be 4 - the new array contains the original items plus the new one',
	).toBe(4)
	expect(
		allProducts[3].name,
		'🚨 allProducts[3].name should be "Monitor" - the new item is at the end of the new array',
	).toBe('Monitor')
})

await testStep('Total inventory value calculation with reduce', async () => {
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
		{ name: 'Monitor', price: 299.99, inStock: true },
	]
	const totalValue = products.reduce((sum, product) => sum + product.price, 0)
	expect(
		totalValue,
		'🚨 totalValue should be 1409.96 - use reduce to sum all product prices (999.99 + 29.99 + 79.99 + 299.99)',
	).toBe(1409.96)
})
