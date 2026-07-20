// Filtering Data
// Selecting elements that match criteria

const products = [
	{ name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
	{ name: 'Toaster', price: 79.99, category: 'Kitchen', inStock: true },
	{
		name: 'Headphones',
		price: 149.99,
		category: 'Electronics',
		inStock: false,
	},
	{ name: 'Blender', price: 49.99, category: 'Kitchen', inStock: true },
	{ name: 'Monitor', price: 299.99, category: 'Electronics', inStock: true },
]

// 🐨 Create `electronics`: only products where category === 'Electronics'
// Expected names: Laptop, Headphones, Monitor

// 🐨 Create `affordable`: only products where price < 100
// Expected names: Toaster, Blender

// 🐨 Create `available`: only products where inStock === true
// Expected length: 4

// 🐨 Create `inStockElectronicsUnder500`: names of products that are in stock,
// Electronics, and price < 500
// Expected: ['Monitor']

// console.log('Electronics:', electronics)
// console.log('Affordable:', affordable)
// console.log('In Stock:', available)

// 🐨 Export electronics, affordable, available, and inStockElectronicsUnder500
// export { electronics, affordable, available, inStockElectronicsUnder500 }
