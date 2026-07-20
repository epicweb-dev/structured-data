// Transforming Data with Map
// Creating new arrays from existing ones

const products = [
	{ name: 'Laptop', price: 999.99, category: 'Electronics' },
	{ name: 'Toaster', price: 79.99, category: 'Kitchen' },
	{ name: 'Headphones', price: 149.99, category: 'Electronics' },
	{ name: 'Blender', price: 49.99, category: 'Kitchen' },
]

// 🐨 Use map to create `names`: just the product names (in order)
// Expected: ['Laptop', 'Toaster', 'Headphones', 'Blender']

// 🐨 Use map to create `prices`: formatted strings like "$999.99"
// Use toFixed(2) so every price has two decimal places
// Expected: ['$999.99', '$79.99', '$149.99', '$49.99']

// 🐨 Use map to create `summary`: objects with `name` and `priceLabel`
// priceLabel should look like "$999.99"
// Expected first item: { name: 'Laptop', priceLabel: '$999.99' }

// console.log('Names:', names)
// console.log('Prices:', prices)
// console.log('Summary:', summary)

// 🐨 Export names, prices, and summary
// export { names, prices, summary }
