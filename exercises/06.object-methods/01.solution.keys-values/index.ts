// Object Keys and Values
// Turning object data into arrays

const inventory = {
	apples: 12,
	oranges: 8,
	bananas: 0,
	mangoes: 4,
}

const itemNames = Object.keys(inventory)
const quantities = Object.values(inventory)
const totalQuantity = quantities.reduce(
	(total, quantity) => total + quantity,
	0,
)

console.log('Item names:', itemNames)
console.log('Quantities:', quantities)
console.log('Total:', totalQuantity)

export { itemNames, quantities, totalQuantity }
