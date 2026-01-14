// Tuple Return Patterns
// Using tuples for multiple return values

function parseNumber(str: string): [number, boolean] {
	const num = parseInt(str, 10)
	return [num, !isNaN(num)]
}

function getMinMax(nums: Array<number>): [number, number] {
	return [Math.min(...nums), Math.max(...nums)]
}

const [min, max] = getMinMax([5, 2, 8, 1, 9])
console.log(`Min: ${min}, Max: ${max}`)

const [num1, success1] = parseNumber('42')
console.log(`Parsed '42': ${num1}, Success: ${success1}`)

const [num2, success2] = parseNumber('hello')
console.log(`Parsed 'hello': ${num2}, Success: ${success2}`)
