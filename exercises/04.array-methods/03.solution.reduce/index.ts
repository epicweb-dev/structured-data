// Reducing Data
// Accumulating arrays into single values

const products = [
	{ name: 'Laptop', price: 999.99, category: 'Electronics' },
	{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen' },
	{ name: 'Headphones', price: 149.99, category: 'Electronics' },
	{ name: 'Blender', price: 49.99, category: 'Kitchen' },
	{ name: 'Monitor', price: 299.99, category: 'Electronics' },
]

const total = products.reduce((sum, p) => sum + p.price, 0)

const mostExpensive = products.reduce(
	(max, p) => (p.price > max.price ? p : max),
	products[0],
)

const countByCategory = products.reduce(
	(acc, p) => {
		acc[p.category] = (acc[p.category] || 0) + 1
		return acc
	},
	{} as Record<string, number>,
)

console.log(`Total: $${total.toFixed(2)}`)
console.log(`Most expensive: ${mostExpensive.name} ($${mostExpensive.price})`)
console.log('By category:', countByCategory)

export {}
