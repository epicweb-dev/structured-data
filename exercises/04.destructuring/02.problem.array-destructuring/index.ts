// Array Destructuring
// Extracting values from arrays by position

const scores = [95, 92, 88, 87, 76]

// 🐨 Destructure the first two scores into `highest` and `secondHighest`
// Expected: 95 and 92

// 🐨 Use the rest pattern to get the first score as `winner` and remaining as `others`
// Expected: winner === 95, others === [92, 88, 87, 76]

const coordinates: [number, number, number] = [10, 20, 30]

// 🐨 Destructure coordinates into x, y, and z
// Expected: 10, 20, 30

// 🐨 Create a function `getMinMax` that:
// - Takes an array of numbers
// - Returns a tuple [min, max]
// Then destructure: const [min, max] = getMinMax(scores)
// Expected for scores: min === 76, max === 95

// Test - uncomment when ready
// console.log(highest, secondHighest) // 95 92
// console.log(winner, others) // 95 [92, 88, 87, 76]
// console.log(x, y, z) // 10 20 30
// console.log(min, max) // 76 95

// 🐨 Export your variables and function so we can verify your work
// export { highest, secondHighest, winner, others, x, y, z, min, max, getMinMax }
