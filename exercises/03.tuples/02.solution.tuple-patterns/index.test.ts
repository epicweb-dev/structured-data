import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('parseNumber should parse valid numbers correctly', async () => {
	function parseNumber(str: string): [number, boolean] {
		const num = parseInt(str, 10)
		return [num, !isNaN(num)]
	}
	const [num1, success1] = parseNumber('42')
	expect(num1).toBe(42)
	expect(success1).toBe(true)
})

await testStep('parseNumber should handle invalid numbers correctly', async () => {
	function parseNumber(str: string): [number, boolean] {
		const num = parseInt(str, 10)
		return [num, !isNaN(num)]
	}
	const [num2, success2] = parseNumber('hello')
	expect(isNaN(num2)).toBe(true)
	expect(success2).toBe(false)
})

await testStep('getMinMax should return correct min and max values', async () => {
	function getMinMax(nums: number[]): [number, number] {
		return [Math.min(...nums), Math.max(...nums)]
	}
	const [min, max] = getMinMax([5, 2, 8, 1, 9])
	expect(min).toBe(1)
	expect(max).toBe(9)
})

await testStep('getMinMax should work with different number arrays', async () => {
	function getMinMax(nums: number[]): [number, number] {
		return [Math.min(...nums), Math.max(...nums)]
	}
	const [min, max] = getMinMax([10, 20, 5, 15])
	expect(min).toBe(5)
	expect(max).toBe(20)
})
