import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('Product object should have correct properties', async () => {
	const product = {
		name: 'TypeScript Handbook',
		price: 29.99,
		inStock: true,
		category: 'Books',
	}
	expect(product.name).toBe('TypeScript Handbook')
	expect(product['price']).toBe(29.99)
	expect(product.inStock).toBe(true)
	expect(product.category).toBe('Books')
})

await testStep('formatProduct should format product correctly', async () => {
	function formatProduct(p: { name: string; price: number }): string {
		return `${p.name} - $${p.price}`
	}
	const product = {
		name: 'TypeScript Handbook',
		price: 29.99,
	}
	expect(formatProduct(product)).toBe('TypeScript Handbook - $29.99')
})
