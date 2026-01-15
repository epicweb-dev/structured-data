// Inventory System
// Working with basic arrays

const initialProducts: Array<string> = ['Laptop', 'Mouse', 'Keyboard']
const products: Array<string> = [...initialProducts]

products.push('Monitor')

console.log('First product:', products[0])

console.log('Last product:', products[products.length - 1])

console.log('Total products:', products.length)

console.log('Products:', products)

export { products }
