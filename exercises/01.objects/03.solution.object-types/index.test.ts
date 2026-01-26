import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('firstTask is exported', () => {
	assert.ok(
		'firstTask' in solution,
		'🚨 Make sure you export "firstTask" - add: export { firstTask, ... }',
	)
})

await test('firstTask has expected values', () => {
	assert.deepStrictEqual(
		solution.firstTask,
		{ id: 1, title: 'Write tests', completed: false },
		'🚨 firstTask should match the required id, title, and completed values',
	)
})

await test('secondTask is exported', () => {
	assert.ok(
		'secondTask' in solution,
		'🚨 Make sure you export "secondTask" - add: export { firstTask, secondTask, ... }',
	)
})

await test('secondTask has expected values', () => {
	assert.deepStrictEqual(
		solution.secondTask,
		{ id: 2, title: 'Ship release', completed: true },
		'🚨 secondTask should match the required id, title, and completed values',
	)
})
