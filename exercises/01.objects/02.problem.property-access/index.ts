// Product Catalog
// Accessing object properties

const product = {
	name: 'TypeScript Handbook',
	price: 29.99,
	inStock: true,
	category: 'Books',
}

// 🐨 Log the product name using dot notation
// 💰 console.log(product.name)

// 🐨 Log the product price using bracket notation
// 💰 console.log(product['price'])

// 🐨 Create a function `formatProduct` that takes a product object
// and returns a string like "TypeScript Handbook - $29.99"
// 💰 function formatProduct(p: { name: string; price: number }): string

// 🐨 Try uncommenting this line - what error do you see?
// console.log(product.rating)

// console.log(formatProduct(product))

// 🐨 When you're done, uncomment this:
// console.log(
// 	'Results JSON:',
// 	JSON.stringify({
// 		product,
// 		formatted: formatProduct(product),
// 	}),
// )
