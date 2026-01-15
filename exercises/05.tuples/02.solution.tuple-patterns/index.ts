// Tuple Return Patterns
// Using tuples for multiple return values

function parseNumber(str: string): [number, boolean] {
	const num = parseInt(str, 10)
	return [num, !isNaN(num)]
}

function getMinMax(nums: Array<number>): [number, number] {
	let min = nums[0]
	let max = nums[0]
	for (const num of nums) {
		if (num < min) min = num
		if (num > max) max = num
	}
	return [min, max]
}

const minMax = getMinMax([5, 2, 8, 1, 9])
const min = minMax[0]
const max = minMax[1]
console.log(`Min: ${min}, Max: ${max}`)

const parsed1 = parseNumber('42')
console.log(`Parsed '42': ${parsed1[0]}, Success: ${parsed1[1]}`)

const parsed2 = parseNumber('hello')
console.log(`Parsed 'hello': ${parsed2[0]}, Success: ${parsed2[1]}`)

const altMinMax = getMinMax([10, 20, 5, 15])

export { parseNumber, getMinMax }
