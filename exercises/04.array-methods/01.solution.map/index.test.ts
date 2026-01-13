import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('Map should extract product names correctly', async () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics' },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen' },
		{ name: 'Headphones', price: 149.99, category: 'Electronics' },
		{ name: 'Blender', price: 49.99, category: 'Kitchen' },
	]
	const names = products.map((p) => p.name)
	expect(
		names,
		'🚨 names should be ["Laptop", "Coffee Maker", "Headphones", "Blender"] - use map() to extract the name property from each product',
	).toEqual(['Laptop', 'Coffee Maker', 'Headphones', 'Blender'])
	expect(
		names.length,
		'🚨 names.length should be 4 - map() returns an array with the same length as the original',
	).toBe(4)
})

await testStep('Map should format prices correctly', async () => {
	const products = [
		{ name: 'Laptop', price: 999.99, category: 'Electronics' },
		{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen' },
		{ name: 'Headphones', price: 149.99, category: 'Electronics' },
		{ name: 'Blender', price: 49.99, category: 'Kitchen' },
	]
	const prices = products.map((p) => `$${p.price.toFixed(2)}`)
	expect(
		prices,
		'🚨 prices should be ["$999.99", "$79.99", "$149.99", "$49.99"] - use map() to format each price with a dollar sign and toFixed(2)',
	).toEqual(['$999.99', '$79.99', '$149.99', '$49.99'])
})

await testStep('Map should create summary objects correctly', async () => {
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
	expect(
		summary,
		'🚨 summary should contain objects with name and priceLabel - use map() to transform each product into a new object shape',
	).toEqual([
		{ name: 'Laptop', priceLabel: '$999.99' },
		{ name: 'Coffee Maker', priceLabel: '$79.99' },
		{ name: 'Headphones', priceLabel: '$149.99' },
		{ name: 'Blender', priceLabel: '$49.99' },
	])
})
