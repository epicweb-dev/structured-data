// Reducing Data
// Accumulating arrays into single values

const products = [
	{ name: 'Laptop', price: 999.99, category: 'Electronics' },
	{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen' },
	{ name: 'Headphones', price: 149.99, category: 'Electronics' },
	{ name: 'Blender', price: 49.99, category: 'Kitchen' },
	{ name: 'Monitor', price: 299.99, category: 'Electronics' },
]

// 🐨 Use reduce to sum all prices
// 💰 Accumulate the prices into a total

// 🐨 Use reduce to find the most expensive product
// 💰 Start with an initial product and compare prices
// const mostExpensive = products.reduce((max, p) => p.price > max.price ? p : max, products[0])

// 🐨 Use reduce to count products by category
// 💰 Return a new accumulator object each iteration to count categories

// console.log('Total:', total)
// console.log('Most expensive:', mostExpensive.name)
// console.log('By category:', countByCategory)

// 🐨 Export your variables so we can verify your work
// export { total, mostExpensive, countByCategory }
