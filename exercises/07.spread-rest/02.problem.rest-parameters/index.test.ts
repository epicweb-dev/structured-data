import assert from 'node:assert/strict'
import { test } from 'node:test'
import { multiply, createArray, mergeArrays } from './index.ts'

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

await test('createArray should collect items via rest', () => {
	assert.strictEqual(
		JSON.stringify(createArray(1, 2, 3)),
		JSON.stringify([1, 2, 3]),
		'🚨 createArray(1, 2, 3) should return [1, 2, 3]',
	)
	assert.strictEqual(
		JSON.stringify(createArray('a', 'b')),
		JSON.stringify(['a', 'b']),
		'🚨 createArray("a", "b") should return ["a", "b"]',
	)
	assert.strictEqual(
		JSON.stringify(createArray()),
		JSON.stringify([]),
		'🚨 createArray() should return []',
	)
})

await test('mergeArrays should merge multiple arrays', () => {
	assert.strictEqual(
		JSON.stringify(mergeArrays([1, 2], [3, 4], [5])),
		JSON.stringify([1, 2, 3, 4, 5]),
		'🚨 mergeArrays([1, 2], [3, 4], [5]) should return [1, 2, 3, 4, 5]',
	)
	assert.strictEqual(
		JSON.stringify(mergeArrays(['a'], ['b', 'c'])),
		JSON.stringify(['a', 'b', 'c']),
		'🚨 mergeArrays(["a"], ["b", "c"]) should return ["a", "b", "c"]',
	)
	assert.strictEqual(
		JSON.stringify(mergeArrays()),
		JSON.stringify([]),
		'🚨 mergeArrays() should return []',
	)
})
