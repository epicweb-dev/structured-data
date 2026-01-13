import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep(
	'Products array should have correct initial values',
	async () => {
		const products: string[] = ['Laptop', 'Mouse', 'Keyboard']
		expect(
			products[0],
			'🚨 products[0] should be "Laptop" - arrays are zero-indexed, so [0] is the first element',
		).toBe('Laptop')
		expect(
			products[1],
			'🚨 products[1] should be "Mouse" - use index 1 to access the second element',
		).toBe('Mouse')
		expect(
			products[2],
			'🚨 products[2] should be "Keyboard" - use index 2 to access the third element',
		).toBe('Keyboard')
		expect(
			products.length,
			'🚨 products.length should be 3 - the length property tells you how many elements are in the array',
		).toBe(3)
	},
)

await testStep('Products array should support push operation', async () => {
	const products: string[] = ['Laptop', 'Mouse', 'Keyboard']
	products.push('Monitor')
	expect(
		products.length,
		'🚨 products.length should be 4 after push - push() adds an element to the end of the array',
	).toBe(4)
	expect(
		products[3],
		'🚨 products[3] should be "Monitor" - after push, the new element is at the end of the array',
	).toBe('Monitor')
	expect(
		products[products.length - 1],
		'🚨 products[products.length - 1] should be "Monitor" - use length - 1 to access the last element',
	).toBe('Monitor')
})

await testStep(
	'Products array should access first and last elements correctly',
	async () => {
		const products: string[] = ['Laptop', 'Mouse', 'Keyboard', 'Monitor']
		expect(
			products[0],
			'🚨 products[0] should be "Laptop" - the first element is at index 0',
		).toBe('Laptop')
		expect(
			products[products.length - 1],
			'🚨 products[products.length - 1] should be "Monitor" - use length - 1 to get the last element',
		).toBe('Monitor')
	},
)
