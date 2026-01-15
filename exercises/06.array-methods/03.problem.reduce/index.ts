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
// 💰 const total = products.reduce((sum, p) => sum + p.price, 0)

// 🐨 Use reduce to find the most expensive product
// 💰 Start with products[0], compare prices
// const mostExpensive = products.reduce((max, p) => p.price > max.price ? p : max, products[0])

// 🐨 Use reduce to count products by category
// 💰 Use spread to create a new object each iteration (immutable pattern):
// const countByCategory = products.reduce(
//   (acc, p) => ({ ...acc, [p.category]: (acc[p.category] || 0) + 1 }),
//   {} as Record<string, number>
// )

// console.log('Total:', total)
// console.log('Most expensive:', mostExpensive.name)
// console.log('By category:', countByCategory)

// 🐨 When you're done, uncomment this:
// console.log(
// 	'Results:',
// 	JSON.stringify({
// 		total,
// 		mostExpensive,
// 		countByCategory,
// 	}),
// )
