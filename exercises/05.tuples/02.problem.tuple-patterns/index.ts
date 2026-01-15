// Tuple Return Patterns
// Using tuples for multiple return values

// 🐨 Create a function `parseNumber` that:
// - Takes a string
// - Returns [number, boolean] where the boolean indicates success
// - Use parseInt and check for NaN
// 💰 const num = parseInt(str, 10)
// 💰 return [num, !isNaN(num)]

// 🐨 Create a function `getMinMax` that:
// - Takes an array of numbers
// - Returns [min, max] as a tuple
// 💰 Use a loop to find min and max without spread

// 🐨 Use index access to get the values
// const minMax = getMinMax([5, 2, 8, 1, 9])
// const min = minMax[0]
// const max = minMax[1]
// const parsed = parseNumber('42')
// const value = parsed[0]
// const success = parsed[1]

// 🐨 When you're done, uncomment this:
// const altMinMax = getMinMax([10, 20, 5, 15])
// console.log(
// 	'Results:',
// 	JSON.stringify({
// 		parsed: [parsed1, parsed2],
// 		minMax,
// 		altMinMax,
// 	}),
// )
