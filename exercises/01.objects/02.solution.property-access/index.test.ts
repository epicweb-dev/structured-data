import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('Product object should have correct properties', async () => {
	const product = {
		name: 'TypeScript Handbook',
		price: 29.99,
		inStock: true,
		category: 'Books',
	}
	expect(product.name, '🚨 product.name should be "TypeScript Handbook" - use dot notation to access the name property').toBe('TypeScript Handbook')
	expect(product['price'], '🚨 product["price"] should be 29.99 - use bracket notation to access the price property').toBe(29.99)
	expect(product.inStock, '🚨 product.inStock should be true - access the inStock property using dot notation').toBe(true)
	expect(product.category, '🚨 product.category should be "Books" - make sure you access the category property correctly').toBe('Books')
})

await testStep('formatProduct should format product correctly', async () => {
	function formatProduct(p: { name: string; price: number }): string {
		return `${p.name} - $${p.price}`
	}
	const product = {
		name: 'TypeScript Handbook',
		price: 29.99,
	}
	expect(formatProduct(product), '🚨 formatProduct should return "TypeScript Handbook - $29.99" - check that you access name and price properties correctly in the function').toBe('TypeScript Handbook - $29.99')
})
