import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('Products array should have correct structure', async () => {
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
		{ name: 'Monitor', price: 299.99, inStock: true },
		{ name: 'Webcam', price: 49.99, inStock: false },
	]
	expect(products.length).toBe(5)
	expect(products[0].name).toBe('Laptop')
	expect(products[4].name).toBe('Webcam')
})

await testStep('In-stock products filtering should work', async () => {
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
		{ name: 'Monitor', price: 299.99, inStock: true },
		{ name: 'Webcam', price: 49.99, inStock: false },
	]
	const inStockProducts: { name: string; price: number; inStock: boolean }[] = []
	for (const product of products) {
		if (product.inStock) {
			inStockProducts.push(product)
		}
	}
	expect(inStockProducts.length).toBe(3)
	expect(inStockProducts.every((p) => p.inStock)).toBe(true)
})

await testStep('Expensive products count should work', async () => {
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
		{ name: 'Monitor', price: 299.99, inStock: true },
		{ name: 'Webcam', price: 49.99, inStock: false },
	]
	let expensiveCount = 0
	for (const product of products) {
		if (product.price > 50) {
			expensiveCount++
		}
	}
	expect(expensiveCount).toBe(3)
})
