// Inventory Analysis
// Iterating and filtering arrays

const products: Array<{ name: string; price: number; inStock: boolean }> = [
	{ name: 'Laptop', price: 999.99, inStock: true },
	{ name: 'Mouse', price: 29.99, inStock: true },
	{ name: 'Keyboard', price: 79.99, inStock: false },
	{ name: 'Monitor', price: 299.99, inStock: true },
	{ name: 'Webcam', price: 49.99, inStock: false },
]

// Logging each product - for...of is great for this
console.log('All products:')
for (const product of products) {
	console.log(`  ${product.name}: $${product.price}`)
}

// Filtering products that are in stock
// This imperative approach works, but there's a more declarative way
// using filter() which we'll learn in Exercise 04!
const inStockProducts: Array<{
	name: string
	price: number
	inStock: boolean
}> = []
for (const product of products) {
	if (product.inStock) {
		inStockProducts.push(product)
	}
}

// Counting expensive products
// Again, this works, but filter().length is more expressive
let expensiveCount = 0
for (const product of products) {
	if (product.price > 50) {
		expensiveCount++
	}
}

console.log('In stock:', inStockProducts.length)
console.log('Expensive products (>$50):', expensiveCount)

console.log(
	'Results:',
	JSON.stringify({
		products,
		inStockProducts,
		expensiveCount,
	}),
)
