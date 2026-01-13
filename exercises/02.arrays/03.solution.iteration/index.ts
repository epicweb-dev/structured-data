// Inventory Analysis
// Iterating and filtering arrays

const products: { name: string; price: number; inStock: boolean }[] = [
	{ name: 'Laptop', price: 999.99, inStock: true },
	{ name: 'Mouse', price: 29.99, inStock: true },
	{ name: 'Keyboard', price: 79.99, inStock: false },
	{ name: 'Monitor', price: 299.99, inStock: true },
	{ name: 'Webcam', price: 49.99, inStock: false },
]

console.log('All products:')
for (const product of products) {
	console.log(`  ${product.name}: $${product.price}`)
}

const inStockProducts: { name: string; price: number; inStock: boolean }[] = []
for (const product of products) {
	if (product.inStock) {
		inStockProducts.push(product)
	}
}

let expensiveCount = 0
for (const product of products) {
	if (product.price > 50) {
		expensiveCount++
	}
}

console.log('In stock:', inStockProducts.length)
console.log('Expensive products (>$50):', expensiveCount)

export {}
