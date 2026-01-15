// Array Destructuring
// Extracting values from arrays by position

const scores = [95, 87, 76, 92, 88]

// Destructure first two elements
const [highest, secondHighest] = scores

// Rest pattern - first element and remaining
const [winner, ...others] = scores

const coordinates: [number, number, number] = [10, 20, 30]

// Tuple destructuring
const [x, y, z] = coordinates

// Function returning tuple, then destructuring result
function getMinMax(nums: Array<number>) {
	const sorted = [...nums].sort((a, b) => a - b)
	return [sorted[0], sorted[sorted.length - 1]] as const
}

const [min, max] = getMinMax(scores)

console.log(highest, secondHighest) // 95 87
console.log(winner, others) // 95 [87, 76, 92, 88]
console.log(x, y, z) // 10 20 30
console.log(min, max) // 76 95

const [testMin, testMax] = getMinMax([5, 2, 8, 1, 9])
console.log(
	'Results:',
	JSON.stringify({
		highest,
		secondHighest,
		winner,
		others,
		x,
		y,
		z,
		min,
		max,
		testMin,
		testMax,
	}),
)
