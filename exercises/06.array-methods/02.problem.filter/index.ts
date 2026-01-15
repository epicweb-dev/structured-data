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
// 💰 const electronics = products.filter(p => p.category === 'Electronics')

// 🐨 Filter to get products under $100
// 💰 const affordable = products.filter(p => p.price < 100)

// 🐨 Filter to get products that are in stock
// 💰 const available = products.filter(p => p.inStock)

// 🐨 Chain: get names of in-stock Electronics under $500
// 💰 products.filter(...).filter(...).map(...)

// console.log('Electronics:', electronics)
// console.log('Affordable:', affordable)
// console.log('In Stock:', available)

// 🐨 When you're done, uncomment this:
// console.log(
// 	'Results:',
// 	JSON.stringify({
// 		electronics: electronics.map((p) => p.name),
// 		affordable: affordable.map((p) => p.name),
// 		available: available.map((p) => p.name),
// 		inStockElectronicsUnder500,
// 	}),
// )
