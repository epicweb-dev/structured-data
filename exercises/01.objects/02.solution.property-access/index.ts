// Product Catalog
// Accessing object properties

const product = {
	name: 'TypeScript Handbook',
	price: 29.99,
	inStock: true,
	category: 'Books',
}

console.log(product.name)

console.log(product['price'])

function formatProduct(p: { name: string; price: number }): string {
	return `${p.name} - $${p.price}`
}

// ❌ This would cause an error:
// console.log(product.rating)
// Property 'rating' does not exist on type '{ name: string; ... }'

console.log(formatProduct(product))

console.log(
	'Results:',
	JSON.stringify({
		product,
		formatted: formatProduct(product),
	}),
)
