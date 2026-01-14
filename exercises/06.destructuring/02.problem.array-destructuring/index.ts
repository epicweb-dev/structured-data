// Array Destructuring
// Extracting values from arrays by position

const scores = [95, 87, 76, 92, 88]

// 🐨 Destructure the first two scores into `highest` and `secondHighest`
// 💰 const [highest, secondHighest] = scores

// 🐨 Use the rest pattern to get the first score as `winner` and remaining as `others`
// 💰 const [winner, ...others] = scores

const coordinates: [number, number, number] = [10, 20, 30]

// 🐨 Destructure coordinates into x, y, and z
// 💰 const [x, y, z] = coordinates

// 🐨 Create a function `getMinMax` that:
// - Takes an array of numbers
// - Returns a tuple [min, max]
// - Then destructure the result when calling it
// 💰 function getMinMax(nums: Array<number>): [number, number]
// 💰 const [min, max] = getMinMax(scores)

// Test - uncomment when ready
// console.log(highest, secondHighest) // 95 87
// console.log(winner, others) // 95 [87, 76, 92, 88]
// console.log(x, y, z) // 10 20 30
// console.log(min, max) // 76 95

// 🦺 This line ensures TypeScript treats this as a module
export {}
