// Array Destructuring
// Extracting values from arrays by position

const scores = [95, 87, 76, 92, 88]

// 🐨 Destructure the first two scores into `highest` and `secondHighest`
// 💰 Destructure the first two elements into variables

// 🐨 Use the rest pattern to get the first score as `winner` and remaining as `others`
// 💰 Use the rest pattern to capture remaining elements

const coordinates: [number, number, number] = [10, 20, 30]

// 🐨 Destructure coordinates into x, y, and z
// 💰 Destructure the tuple by position

// 🐨 Create a function `getMinMax` that:
// - Takes an array of numbers
// - Returns a tuple [min, max]
// - Then destructure the result when calling it
// 💰 Return a tuple and destructure the result

// Test - uncomment when ready
// console.log(highest, secondHighest) // 95 87
// console.log(winner, others) // 95 [87, 76, 92, 88]
// console.log(x, y, z) // 10 20 30
// console.log(min, max) // 76 95

// 🐨 Export your variables and function so we can verify your work
// export { highest, secondHighest, winner, others, x, y, z, min, max, getMinMax }
