import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('Products array should have correct initial values', async () => {
	const products: string[] = ['Laptop', 'Mouse', 'Keyboard']
	expect(products[0]).toBe('Laptop')
	expect(products[1]).toBe('Mouse')
	expect(products[2]).toBe('Keyboard')
	expect(products.length).toBe(3)
})

await testStep('Products array should support push operation', async () => {
	const products: string[] = ['Laptop', 'Mouse', 'Keyboard']
	products.push('Monitor')
	expect(products.length).toBe(4)
	expect(products[3]).toBe('Monitor')
	expect(products[products.length - 1]).toBe('Monitor')
})

await testStep('Products array should access first and last elements correctly', async () => {
	const products: string[] = ['Laptop', 'Mouse', 'Keyboard', 'Monitor']
	expect(products[0]).toBe('Laptop')
	expect(products[products.length - 1]).toBe('Monitor')
})
