// Rest Parameters
// Functions that accept variable numbers of arguments

// Rest parameters collect all arguments into an array
function multiply(...numbers: Array<number>) {
	if (numbers.length === 0) return 1
	return numbers.reduce((a, b) => a * b, 1)
}

// Combining regular parameter with rest
function logWithPrefix(prefix: string, ...messages: Array<string>) {
	for (const message of messages) {
		console.log(`${prefix} ${message}`)
	}
}

// Generic rest parameters
function createArray<T>(...items: Array<T>) {
	return items
}

// Rest + spread combo - collect arrays, spread to merge
function mergeArrays<T>(...arrays: Array<Array<T>>) {
	const result: Array<T> = []
	for (const arr of arrays) {
		result.push(...arr)
	}
	return result
}

console.log(multiply(2, 3, 4)) // 24
console.log(multiply(5)) // 5
console.log(multiply()) // 1
logWithPrefix('[INFO]', 'Starting', 'Processing', 'Done')
console.log(createArray(1, 2, 3)) // [1, 2, 3]
console.log(createArray('a', 'b')) // ['a', 'b']
console.log(mergeArrays([1, 2], [3, 4], [5])) // [1, 2, 3, 4, 5]

export { multiply, logWithPrefix, createArray, mergeArrays }
