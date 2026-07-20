// Object Entries and fromEntries
// Transforming object values with array methods

const priceBySku = {
	'sku-1': 1299,
	'sku-2': 499,
	'sku-3': 2500,
}

// 🐨 Create `entries` using Object.entries
// Expected: [['sku-1', 1299], ['sku-2', 499], ['sku-3', 2500]]

// 🐨 Create `discountedEntries` from those entries:
// apply a 10% discount to each price and round to the nearest whole number
// Expected discounted prices (same sku order): 1169, 449, 2250

// 🐨 Create `discountedPrices` using Object.fromEntries
// Expected: { 'sku-1': 1169, 'sku-2': 449, 'sku-3': 2250 }

// console.log('Entries:', entries)
// console.log('Discounted:', discountedPrices)

// 🐨 Export entries, discountedEntries, and discountedPrices
// export { entries, discountedEntries, discountedPrices }
