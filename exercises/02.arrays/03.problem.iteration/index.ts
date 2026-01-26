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
// 💰 Use a for...of loop to iterate through the array

// 🐨 Create an array of products that are in stock
// 💰 Create an array to collect the in-stock items

// 🐨 Count how many products cost more than $50
// 💰 Track a count as you loop

// console.log('In stock:', inStockProducts.length)
// console.log('Expensive products:', expensiveCount)

// 🐨 Export your variables so we can verify your work
// export { products, inStockProducts, expensiveCount }
