// Product Inventory
// Arrays of objects

const products: { name: string; price: number; inStock: boolean }[] = [
	{ name: 'Laptop', price: 999.99, inStock: true },
	{ name: 'Mouse', price: 29.99, inStock: true },
	{ name: 'Keyboard', price: 79.99, inStock: false },
]

// Adding to an array using spread (immutable - creates a new array)
const allProducts = [
	...products,
	{ name: 'Monitor', price: 299.99, inStock: true },
]

console.log('First product:', allProducts[0].name)

// Calculate total using reduce (we'll cover this in detail in Exercise 04)
const totalValue = allProducts.reduce((sum, product) => sum + product.price, 0)
console.log(`Total inventory value: $${totalValue.toFixed(2)}`)

export {}
