// Reducing Data
// Accumulating arrays into single values

const products = [
	{ name: 'Laptop', price: 999.99, category: 'Electronics' },
	{ name: 'Toaster', price: 79.99, category: 'Kitchen' },
	{ name: 'Headphones', price: 149.99, category: 'Electronics' },
	{ name: 'Blender', price: 49.99, category: 'Kitchen' },
	{ name: 'Monitor', price: 299.99, category: 'Electronics' },
]

// 🐨 Use reduce to create `total`: sum of all prices (start from 0)
// Expected: 1579.95

// 🐨 Use reduce to create `mostExpensive`: the product with the highest price
// 💰 You can use the first product as the initial value (products[0])
// Expected: Laptop at 999.99

// 🐨 Use reduce to create `countByCategory`: counts keyed by category
// 💰 The accumulator can be an object ({} as Record<string, number>)
// Expected: Electronics 3, Kitchen 2

// console.log('Total:', total)
// console.log('Most expensive:', mostExpensive.name)
// console.log('By category:', countByCategory)

// 🐨 Export total, mostExpensive, and countByCategory
// export { total, mostExpensive, countByCategory }
