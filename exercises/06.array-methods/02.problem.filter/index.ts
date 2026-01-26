// Filtering Data
// Selecting elements that match criteria

const products = [
	{ name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
	{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen', inStock: true },
	{
		name: 'Headphones',
		price: 149.99,
		category: 'Electronics',
		inStock: false,
	},
	{ name: 'Blender', price: 49.99, category: 'Kitchen', inStock: true },
	{ name: 'Monitor', price: 299.99, category: 'Electronics', inStock: true },
]

// 🐨 Filter to get only Electronics products
// 💰 Filter by the category field

// 🐨 Filter to get products under $100
// 💰 Filter by price

// 🐨 Filter to get products that are in stock
// 💰 Filter by the inStock flag

// 🐨 Chain: get names of in-stock Electronics under $500
// 💰 Chain filters, then map to names

// console.log('Electronics:', electronics)
// console.log('Affordable:', affordable)
// console.log('In Stock:', available)

// 🐨 Export your variables so we can verify your work
// export { electronics, affordable, available, inStockElectronicsUnder500 }
