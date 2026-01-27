// Array Destructuring
// Extracting values from arrays by position

const scores = [95, 92, 88, 87, 76]

// 🐨 Destructure the first two scores into `highest` and `secondHighest`

// 🐨 Use the rest pattern to get the first score as `winner` and remaining as `others`

const coordinates: [number, number, number] = [10, 20, 30]

// 🐨 Destructure coordinates into x, y, and z

// 🐨 Create a function `getMinMax` that:
// - Takes an array of numbers
// - Returns a tuple [min, max]
// - Then destructure the result when calling it

// Test - uncomment when ready
// console.log(highest, secondHighest) // 95 92
// console.log(winner, others) // 95 [92, 88, 87, 76]
// console.log(x, y, z) // 10 20 30
// console.log(min, max) // 76 95

// 🐨 Export your variables and function so we can verify your work
// export { highest, secondHighest, winner, others, x, y, z, min, max, getMinMax }
