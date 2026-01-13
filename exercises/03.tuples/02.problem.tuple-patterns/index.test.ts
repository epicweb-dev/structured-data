import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('parseNumber should parse valid numbers correctly', () => {
	function parseNumber(str: string): [number, boolean] {
		const num = parseInt(str, 10)
		return [num, !isNaN(num)]
	}
	const [num1, success1] = parseNumber('42')
	assert.strictEqual(
		num1,
		42,
		'🚨 num1 should be 42 - destructure the tuple to get the first element (the parsed number)',
	)
	assert.strictEqual(
		success1,
		true,
		'🚨 success1 should be true - destructure the tuple to get the second element (the success flag)',
	)
})

await test('parseNumber should handle invalid numbers correctly', () => {
	function parseNumber(str: string): [number, boolean] {
		const num = parseInt(str, 10)
		return [num, !isNaN(num)]
	}
	const [num2, success2] = parseNumber('hello')
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
		return [Math.min(...nums), Math.max(...nums)]
	}
	const [min, max] = getMinMax([5, 2, 8, 1, 9])
	assert.strictEqual(
		min,
		1,
		'🚨 min should be 1 - destructure the tuple to get the first element (minimum value)',
	)
	assert.strictEqual(
		max,
		9,
		'🚨 max should be 9 - destructure the tuple to get the second element (maximum value)',
	)
})

await test('getMinMax should work with different number arrays', () => {
	function getMinMax(nums: Array<number>): [number, number] {
		return [Math.min(...nums), Math.max(...nums)]
	}
	const [min, max] = getMinMax([10, 20, 5, 15])
	assert.strictEqual(
		min,
		5,
		'🚨 min should be 5 - use Math.min to find the minimum value in the array',
	)
	assert.strictEqual(
		max,
		20,
		'🚨 max should be 20 - use Math.max to find the maximum value in the array',
	)
})
