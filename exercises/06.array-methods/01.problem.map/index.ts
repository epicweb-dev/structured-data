// Transforming Data with Map
// Creating new arrays from existing ones

const products = [
	{ name: 'Laptop', price: 999.99, category: 'Electronics' },
	{ name: 'Coffee Maker', price: 79.99, category: 'Kitchen' },
	{ name: 'Headphones', price: 149.99, category: 'Electronics' },
	{ name: 'Blender', price: 49.99, category: 'Kitchen' },
]

// 🐨 Use map to extract just the product names
// 💰 const names = products.map(p => p.name)

// 🐨 Use map to create formatted price strings like "$999.99"
// 💰 const prices = products.map(p => `$${p.price.toFixed(2)}`)

// 🐨 Use map to create objects with just name and priceLabel
// 💰 const summary = products.map(p => ({ name: p.name, priceLabel: `$${p.price}` }))

// console.log('Names:', names)
// console.log('Prices:', prices)
// console.log('Summary:', summary)

// 🐨 Export your variables so we can verify your work
// 💰 export { names, prices, summary }
