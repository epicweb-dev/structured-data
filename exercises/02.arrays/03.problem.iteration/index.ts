// Inventory Analysis
// Iterating and filtering arrays

type Product = {
	name: string
	price: number
	inStock: boolean
}

const products: Array<Product> = [
	{ name: 'Laptop', price: 999.99, inStock: true },
	{ name: 'Mouse', price: 29.99, inStock: true },
	{ name: 'Keyboard', price: 79.99, inStock: false },
	{ name: 'Monitor', price: 299.99, inStock: true },
	{ name: 'Webcam', price: 49.99, inStock: false },
]

// 🐨 Use for...of to log each product's name and price

// 🐨 Create `inStockProducts`: an array of products where inStock is true
// (expected length: 3)

// 🐨 Create `expensiveCount`: how many products have price > 50
// (expected count: 3 — Laptop, Keyboard, Monitor)

// console.log('In stock:', inStockProducts.length)
// console.log('Expensive products:', expensiveCount)

// 🐨 Export products, inStockProducts, and expensiveCount
// export { products, inStockProducts, expensiveCount }
