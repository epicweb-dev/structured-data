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

await testStep(
	'Products array should support push with typed objects',
	async () => {
		const products: { name: string; price: number; inStock: boolean }[] = [
			{ name: 'Laptop', price: 999.99, inStock: true },
			{ name: 'Mouse', price: 29.99, inStock: true },
			{ name: 'Keyboard', price: 79.99, inStock: false },
		]
		products.push({ name: 'Monitor', price: 299.99, inStock: true })
		expect(
			products.length,
			'🚨 products.length should be 4 after push - push adds a new object to the end of the array',
		).toBe(4)
		expect(
			products[3].name,
			'🚨 products[3].name should be "Monitor" - the pushed object should be at index 3',
		).toBe('Monitor')
		expect(
			products[3].price,
			'🚨 products[3].price should be 299.99 - verify the price property of the pushed object',
		).toBe(299.99)
		expect(
			products[3].inStock,
			'🚨 products[3].inStock should be true - verify the inStock property of the pushed object',
		).toBe(true)
	},
)

await testStep('Total inventory value calculation should work', async () => {
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
		{ name: 'Monitor', price: 299.99, inStock: true },
	]
	let totalValue = 0
	for (const product of products) {
		totalValue += product.price
	}
	expect(
		totalValue,
		'🚨 totalValue should be 1409.96 - sum all product prices using a loop (999.99 + 29.99 + 79.99 + 299.99)',
	).toBe(1409.96)
})
