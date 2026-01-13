import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('parseNumber should parse valid numbers correctly', async () => {
	function parseNumber(str: string): [number, boolean] {
		const num = parseInt(str, 10)
		return [num, !isNaN(num)]
	}
	const [num1, success1] = parseNumber('42')
	expect(num1, '🚨 num1 should be 42 - destructure the tuple to get the first element (the parsed number)').toBe(42)
	expect(success1, '🚨 success1 should be true - destructure the tuple to get the second element (the success flag)').toBe(true)
})

await testStep('parseNumber should handle invalid numbers correctly', async () => {
	function parseNumber(str: string): [number, boolean] {
		const num = parseInt(str, 10)
		return [num, !isNaN(num)]
	}
	const [num2, success2] = parseNumber('hello')
	expect(isNaN(num2), '🚨 num2 should be NaN - when parsing "hello", parseInt returns NaN').toBe(true)
	expect(success2, '🚨 success2 should be false - when parsing fails, the success flag should be false').toBe(false)
})

await testStep('getMinMax should return correct min and max values', async () => {
	function getMinMax(nums: number[]): [number, number] {
		return [Math.min(...nums), Math.max(...nums)]
	}
	const [min, max] = getMinMax([5, 2, 8, 1, 9])
	expect(min, '🚨 min should be 1 - destructure the tuple to get the first element (minimum value)').toBe(1)
	expect(max, '🚨 max should be 9 - destructure the tuple to get the second element (maximum value)').toBe(9)
})

await testStep('getMinMax should work with different number arrays', async () => {
	function getMinMax(nums: number[]): [number, number] {
		return [Math.min(...nums), Math.max(...nums)]
	}
	const [min, max] = getMinMax([10, 20, 5, 15])
	expect(min, '🚨 min should be 5 - use Math.min to find the minimum value in the array').toBe(5)
	expect(max, '🚨 max should be 20 - use Math.max to find the maximum value in the array').toBe(20)
})
