import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('multiply is exported', () => {
	assert.ok(
		'multiply' in solution,
		'🚨 Make sure you export "multiply" - add: export { multiply, ... }',
	)
})

await test('sum is exported', () => {
	assert.ok(
		'sum' in solution,
		'🚨 Make sure you export "sum" - add: export { sum, ... }',
	)
})

await test('mergeArrays is exported', () => {
	assert.ok(
		'mergeArrays' in solution,
		'🚨 Make sure you export "mergeArrays" - add: export { mergeArrays, ... }',
	)
})

await test('multiply should use rest parameters', () => {
	assert.strictEqual(
		solution.multiply(2, 3, 4),
		24,
		'🚨 multiply(2, 3, 4) should return 24',
	)
	assert.strictEqual(solution.multiply(5), 5, '🚨 multiply(5) should return 5')
	assert.strictEqual(
		solution.multiply(),
		1,
		'🚨 multiply() with no args should return 1',
	)
	assert.strictEqual(
		solution.multiply(2, 2, 2, 2),
		16,
		'🚨 multiply(2, 2, 2, 2) should return 16',
	)
})

await test('sum should add all numbers', () => {
	assert.strictEqual(
		solution.sum(1, 2, 3, 4),
		10,
		'🚨 sum(1, 2, 3, 4) should return 10',
	)
	assert.strictEqual(solution.sum(5), 5, '🚨 sum(5) should return 5')
	assert.strictEqual(solution.sum(), 0, '🚨 sum() with no args should return 0')
})

await test('mergeArrays should merge multiple arrays', () => {
	assert.deepStrictEqual(
		solution.mergeArrays([1, 2], [3, 4], [5]),
		[1, 2, 3, 4, 5],
		'🚨 mergeArrays([1, 2], [3, 4], [5]) should return [1, 2, 3, 4, 5]',
	)
	assert.deepStrictEqual(
		solution.mergeArrays([10], [20, 30]),
		[10, 20, 30],
		'🚨 mergeArrays([10], [20, 30]) should return [10, 20, 30]',
	)
	assert.deepStrictEqual(
		solution.mergeArrays(),
		[],
		'🚨 mergeArrays() should return []',
	)
})
