import assert from 'node:assert/strict'
import { test } from 'node:test'
import { multiply, sum, mergeArrays } from './index.ts'

await test('multiply should use rest parameters', () => {
	assert.strictEqual(
		multiply(2, 3, 4),
		24,
		'🚨 multiply(2, 3, 4) should return 24',
	)
	assert.strictEqual(multiply(5), 5, '🚨 multiply(5) should return 5')
	assert.strictEqual(
		multiply(),
		1,
		'🚨 multiply() with no args should return 1',
	)
	assert.strictEqual(
		multiply(2, 2, 2, 2),
		16,
		'🚨 multiply(2, 2, 2, 2) should return 16',
	)
})

await test('sum should add all numbers', () => {
	assert.strictEqual(sum(1, 2, 3, 4), 10, '🚨 sum(1, 2, 3, 4) should return 10')
	assert.strictEqual(sum(5), 5, '🚨 sum(5) should return 5')
	assert.strictEqual(sum(), 0, '🚨 sum() with no args should return 0')
})

await test('mergeArrays should merge multiple arrays', () => {
	assert.strictEqual(
		JSON.stringify(mergeArrays([1, 2], [3, 4], [5])),
		JSON.stringify([1, 2, 3, 4, 5]),
		'🚨 mergeArrays([1, 2], [3, 4], [5]) should return [1, 2, 3, 4, 5]',
	)
	assert.strictEqual(
		JSON.stringify(mergeArrays([10], [20, 30])),
		JSON.stringify([10, 20, 30]),
		'🚨 mergeArrays([10], [20, 30]) should return [10, 20, 30]',
	)
	assert.strictEqual(
		JSON.stringify(mergeArrays()),
		JSON.stringify([]),
		'🚨 mergeArrays() should return []',
	)
})
