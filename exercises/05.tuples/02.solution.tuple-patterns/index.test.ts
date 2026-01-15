import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('parseNumber should parse valid numbers correctly', () => {
	function parseNumber(str: string): [number, boolean] {
		const num = parseInt(str, 10)
		return [num, !isNaN(num)]
	}
	const parsed = parseNumber('42')
	const num1 = parsed[0]
	const success1 = parsed[1]
	assert.strictEqual(
		num1,
		42,
		'🚨 num1 should be 42 - use index access to get the first tuple element (the parsed number)',
	)
	assert.strictEqual(
		success1,
		true,
		'🚨 success1 should be true - use index access to get the second tuple element (the success flag)',
	)
})

await test('parseNumber should handle invalid numbers correctly', () => {
	function parseNumber(str: string): [number, boolean] {
		const num = parseInt(str, 10)
		return [num, !isNaN(num)]
	}
	const parsed = parseNumber('hello')
	const num2 = parsed[0]
	const success2 = parsed[1]
	assert.strictEqual(
		isNaN(num2),
		true,
		'🚨 num2 should be NaN - when parsing "hello", parseInt returns NaN',
	)
	assert.strictEqual(
		success2,
		false,
		'🚨 success2 should be false - when parsing fails, the success flag should be false',
	)
})

await test('getMinMax should return correct min and max values', () => {
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
	assert.strictEqual(
		min,
		1,
		'🚨 min should be 1 - use index access to get the first tuple element (minimum value)',
	)
	assert.strictEqual(
		max,
		9,
		'🚨 max should be 9 - use index access to get the second tuple element (maximum value)',
	)
})

await test('getMinMax should work with different number arrays', () => {
	function getMinMax(nums: Array<number>): [number, number] {
		let min = nums[0]
		let max = nums[0]
		for (const num of nums) {
			if (num < min) min = num
			if (num > max) max = num
		}
		return [min, max]
	}
	const minMax = getMinMax([10, 20, 5, 15])
	const min = minMax[0]
	const max = minMax[1]
	assert.strictEqual(
		min,
		5,
		'🚨 min should be 5 - use a loop to find the minimum value in the array',
	)
	assert.strictEqual(
		max,
		20,
		'🚨 max should be 20 - use a loop to find the maximum value in the array',
	)
})
