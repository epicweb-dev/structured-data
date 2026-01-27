// Object Entries and fromEntries
// Transforming object values with array methods

const priceBySku = {
	'sku-1': 1299,
	'sku-2': 499,
	'sku-3': 2500,
}

const entries = Object.entries(priceBySku)
const discountedEntries = entries.map(([sku, price]) => [
	sku,
	Math.round(price * 0.9),
])
const discountedPrices = Object.fromEntries(discountedEntries)

console.log('Entries:', entries)
console.log('Discounted:', discountedPrices)

export { entries, discountedEntries, discountedPrices }
