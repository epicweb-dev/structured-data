import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('Products array should have correct typed structure', async () => {
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
	]
	expect(products[0].name).toBe('Laptop')
	expect(products[0].price).toBe(999.99)
	expect(products[0].inStock).toBe(true)
	expect(products.length).toBe(3)
})

await testStep('Products array should support push with typed objects', async () => {
	const products: { name: string; price: number; inStock: boolean }[] = [
		{ name: 'Laptop', price: 999.99, inStock: true },
		{ name: 'Mouse', price: 29.99, inStock: true },
		{ name: 'Keyboard', price: 79.99, inStock: false },
	]
	products.push({ name: 'Monitor', price: 299.99, inStock: true })
	expect(products.length).toBe(4)
	expect(products[3].name).toBe('Monitor')
	expect(products[3].price).toBe(299.99)
	expect(products[3].inStock).toBe(true)
})

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
	expect(totalValue).toBe(1409.96)
})
