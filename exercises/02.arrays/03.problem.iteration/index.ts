// Inventory Analysis
// Iterating and filtering arrays

const products: { name: string; price: number; inStock: boolean }[] = [
	{ name: 'Laptop', price: 999.99, inStock: true },
	{ name: 'Mouse', price: 29.99, inStock: true },
	{ name: 'Keyboard', price: 79.99, inStock: false },
	{ name: 'Monitor', price: 299.99, inStock: true },
	{ name: 'Webcam', price: 49.99, inStock: false },
]

// 🐨 Use for...of to log each product's name and price
// 💰 for (const product of products) { ... }

// 🐨 Create an array of products that are in stock
// 💰 const inStockProducts: { name: string; price: number; inStock: boolean }[] = []

// 🐨 Count how many products cost more than $50
// 💰 let expensiveCount = 0

// console.log('In stock:', inStockProducts.length)
// console.log('Expensive products:', expensiveCount)

// 🦺 This line ensures TypeScript treats this as a module
export {}
