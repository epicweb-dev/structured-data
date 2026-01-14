// Rest Parameters
// Functions that accept variable numbers of arguments

// 🐨 Create a function `multiply` that:
// - Uses rest parameters to accept any number of numbers
// - Returns the product of all numbers (multiply them together)
// - Returns 1 if no arguments are provided
// 💰 function multiply(...numbers: Array<number>): number

// 🐨 Create a function `logWithPrefix` that:
// - Takes a prefix string as the first parameter
// - Uses rest for remaining messages
// - Logs each message with the prefix
// 💰 function logWithPrefix(prefix: string, ...messages: Array<string>): void

// 🐨 Create a function `createArray` that:
// - Uses rest parameters to collect items
// - Returns them as an array
// This shows how rest collects arguments into an array
// 💰 function createArray<T>(...items: Array<T>): Array<T>

// 🐨 Create a function `mergeArrays` that:
// - Takes rest parameters of arrays
// - Returns a single merged array using spread inside
// 💰 function mergeArrays<T>(...arrays: Array<Array<T>>): Array<T>

// Test - uncomment when ready
// console.log(multiply(2, 3, 4)) // 24
// console.log(multiply(5)) // 5
// console.log(multiply()) // 1
// logWithPrefix('[INFO]', 'Starting', 'Processing', 'Done')
// console.log(createArray(1, 2, 3)) // [1, 2, 3]
// console.log(createArray('a', 'b')) // ['a', 'b']
// console.log(mergeArrays([1, 2], [3, 4], [5])) // [1, 2, 3, 4, 5]

// 🦺 This line ensures TypeScript treats this as a module
export {}
