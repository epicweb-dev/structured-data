import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('highest is exported', () => {
	assert.ok(
		'highest' in solution,
		'🚨 Make sure you export "highest" - add: export { highest, ... }',
	)
})

await test('secondHighest is exported', () => {
	assert.ok(
		'secondHighest' in solution,
		'🚨 Make sure you export "secondHighest" - add: export { secondHighest, ... }',
	)
})

await test('winner is exported', () => {
	assert.ok(
		'winner' in solution,
		'🚨 Make sure you export "winner" - add: export { winner, ... }',
	)
})

await test('others is exported', () => {
	assert.ok(
		'others' in solution,
		'🚨 Make sure you export "others" - add: export { others, ... }',
	)
})

await test('x, y, z are exported', () => {
	assert.ok('x' in solution, '🚨 Make sure you export "x"')
	assert.ok('y' in solution, '🚨 Make sure you export "y"')
	assert.ok('z' in solution, '🚨 Make sure you export "z"')
})

await test('min and max are exported', () => {
	assert.ok('min' in solution, '🚨 Make sure you export "min"')
	assert.ok('max' in solution, '🚨 Make sure you export "max"')
})

await test('getMinMax is exported', () => {
	assert.ok(
		'getMinMax' in solution,
		'🚨 Make sure you export "getMinMax" - add: export { getMinMax, ... }',
	)
})

await test('highest and secondHighest should be destructured', () => {
	assert.strictEqual(
		solution.highest,
		95,
		'🚨 highest should be 95 - destructure first element from scores',
	)
	assert.strictEqual(
		solution.secondHighest,
		92,
		'🚨 secondHighest should be 92 - destructure second element from scores',
	)
})

await test('winner and others should use rest pattern', () => {
	assert.strictEqual(
		solution.winner,
		95,
		'🚨 winner should be 95 - first element from scores via rest destructuring',
	)
	assert.deepStrictEqual(
		solution.others,
		[92, 88, 87, 76],
		'🚨 others should be [92, 88, 87, 76] - remaining scores after the first',
	)
})

await test('coordinates should be destructured into x, y, z', () => {
	assert.strictEqual(
		solution.x,
		10,
		'🚨 x should be 10 - destructure from coordinates',
	)
	assert.strictEqual(
		solution.y,
		20,
		'🚨 y should be 20 - destructure from coordinates',
	)
	assert.strictEqual(
		solution.z,
		30,
		'🚨 z should be 30 - destructure from coordinates',
	)
})

await test('getMinMax should return tuple and be destructured', () => {
	assert.strictEqual(
		solution.min,
		76,
		'🚨 min should be 76 - destructure getMinMax result',
	)
	assert.strictEqual(
		solution.max,
		95,
		'🚨 max should be 95 - destructure getMinMax result',
	)

	const [testMin, testMax] = solution.getMinMax([5, 2, 8, 1, 9])
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
