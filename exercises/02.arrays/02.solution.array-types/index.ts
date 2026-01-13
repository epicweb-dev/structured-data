// Product Inventory
// Arrays of objects

const products: { name: string; price: number; inStock: boolean }[] = [
	{ name: 'Laptop', price: 999.99, inStock: true },
	{ name: 'Mouse', price: 29.99, inStock: true },
	{ name: 'Keyboard', price: 79.99, inStock: false },
]

products.push({ name: 'Monitor', price: 299.99, inStock: true })

console.log('First product:', products[0].name)

let totalValue = 0
for (const product of products) {
	totalValue += product.price
}
console.log(`Total inventory value: $${totalValue.toFixed(2)}`)

export {}
