import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { multiply, sum, mergeArrays } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('multiply should use rest parameters', () => {
	assert.strictEqual(multiply[0], 24, '🚨 multiply(2, 3, 4) should return 24')
	assert.strictEqual(multiply[1], 5, '🚨 multiply(5) should return 5')
	assert.strictEqual(
		multiply[2],
		1,
		'🚨 multiply() with no args should return 1',
	)
	assert.strictEqual(
		multiply[3],
		16,
		'🚨 multiply(2, 2, 2, 2) should return 16',
	)
})

await test('sum should add all numbers', () => {
	assert.strictEqual(sum[0], 10, '🚨 sum(1, 2, 3, 4) should return 10')
	assert.strictEqual(sum[1], 5, '🚨 sum(5) should return 5')
	assert.strictEqual(sum[2], 0, '🚨 sum() with no args should return 0')
})

await test('mergeArrays should merge multiple arrays', () => {
	assert.strictEqual(
		JSON.stringify(mergeArrays[0]),
		JSON.stringify([1, 2, 3, 4, 5]),
		'🚨 mergeArrays([1, 2], [3, 4], [5]) should return [1, 2, 3, 4, 5]',
	)
	assert.strictEqual(
		JSON.stringify(mergeArrays[1]),
		JSON.stringify([10, 20, 30]),
		'🚨 mergeArrays([10], [20, 30]) should return [10, 20, 30]',
	)
	assert.strictEqual(
		JSON.stringify(mergeArrays[2]),
		JSON.stringify([]),
		'🚨 mergeArrays() should return []',
	)
})
