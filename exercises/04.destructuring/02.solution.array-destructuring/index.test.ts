import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
	highest,
	secondHighest,
	winner,
	others,
	x,
	y,
	z,
	min,
	max,
	getMinMax,
} from './index.ts'

await test('highest and secondHighest should be destructured', () => {
	assert.strictEqual(
		highest,
		95,
		'🚨 highest should be 95 - destructure first element from scores',
	)
	assert.strictEqual(
		secondHighest,
		87,
		'🚨 secondHighest should be 87 - destructure second element from scores',
	)
})

await test('winner and others should use rest pattern', () => {
	assert.strictEqual(
		winner,
		95,
		'🚨 winner should be 95 - use const [winner, ...others] = scores',
	)
	assert.strictEqual(
		JSON.stringify(others),
		JSON.stringify([87, 76, 92, 88]),
		'🚨 others should be [87, 76, 92, 88] - use rest pattern',
	)
})

await test('coordinates should be destructured into x, y, z', () => {
	assert.strictEqual(x, 10, '🚨 x should be 10 - destructure from coordinates')
	assert.strictEqual(y, 20, '🚨 y should be 20 - destructure from coordinates')
	assert.strictEqual(z, 30, '🚨 z should be 30 - destructure from coordinates')
})

await test('getMinMax should return tuple and be destructured', () => {
	assert.strictEqual(
		min,
		76,
		'🚨 min should be 76 - destructure getMinMax result',
	)
	assert.strictEqual(
		max,
		95,
		'🚨 max should be 95 - destructure getMinMax result',
	)

	const [testMin, testMax] = getMinMax([5, 2, 8, 1, 9])
	assert.strictEqual(
		testMin,
		1,
		'🚨 getMinMax([5,2,8,1,9]) should return min 1',
	)
	assert.strictEqual(
		testMax,
		9,
		'🚨 getMinMax([5,2,8,1,9]) should return max 9',
	)
})
