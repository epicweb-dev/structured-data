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

const electronics = products.filter((p) => p.category === 'Electronics')

const affordable = products.filter((p) => p.price < 100)

const available = products.filter((p) => p.inStock)

const inStockElectronicsUnder500 = products
	.filter((p) => p.inStock)
	.filter((p) => p.category === 'Electronics')
	.filter((p) => p.price < 500)
	.map((p) => p.name)

console.log(
	'Electronics:',
	electronics.map((p) => p.name),
)
console.log(
	'Affordable:',
	affordable.map((p) => p.name),
)
console.log(
	'In Stock:',
	available.map((p) => p.name),
)
console.log('In-stock Electronics under $500:', inStockElectronicsUnder500)

export { electronics, affordable, available, inStockElectronicsUnder500 }
