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
	expect(products.length, '🚨 products.length should be 5 - verify you have five product objects in the array').toBe(5)
	expect(products[0].name, '🚨 products[0].name should be "Laptop" - access the name property of the first product').toBe('Laptop')
	expect(products[4].name, '🚨 products[4].name should be "Webcam" - access the name property of the last product (index 4)').toBe('Webcam')
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
	expect(inStockProducts.length, '🚨 inStockProducts.length should be 3 - filter products where inStock is true (Laptop, Mouse, Monitor)').toBe(3)
	expect(inStockProducts.every((p) => p.inStock), '🚨 All inStockProducts should have inStock === true - verify your filter condition checks inStock property').toBe(true)
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
	expect(expensiveCount, '🚨 expensiveCount should be 3 - count products where price > 50 (Laptop, Keyboard, Monitor)').toBe(3)
})
