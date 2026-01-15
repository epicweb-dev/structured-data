// Transforming Data with Map
// Creating new arrays from existing ones

const products = [
	{ name: 'Laptop', price: 999.99, category: 'Electronics' },
	{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen' },
	{ name: 'Headphones', price: 149.99, category: 'Electronics' },
	{ name: 'Blender', price: 49.99, category: 'Kitchen' },
]

const names = products.map((p) => p.name)

const prices = products.map((p) => `$${p.price.toFixed(2)}`)

const summary = products.map((p) => ({
	name: p.name,
	priceLabel: `$${p.price}`,
}))

console.log('Names:', names)
console.log('Prices:', prices)
console.log('Summary:', summary)

console.log(
	'Results:',
	JSON.stringify({
		names,
		prices,
		summary,
	}),
)
