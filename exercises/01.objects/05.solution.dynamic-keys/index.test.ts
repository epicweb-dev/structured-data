import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('pageViews is exported', () => {
	assert.ok(
		'pageViews' in solution,
		'🚨 Make sure you export "pageViews" - add: export { pageViews, ... }',
	)
})

await test('pageViews should include dynamic keys', () => {
	assert.strictEqual(
		solution.pageViews.home,
		101,
		'🚨 pageViews.home should be 101 - start at 100 and increment once in recordView',
	)
	assert.strictEqual(
		solution.pageViews.about,
		42,
		'🚨 pageViews.about should be 42 - set the about page count with bracket notation',
	)
	assert.strictEqual(
		solution.pageViews.contact,
		1,
		'🚨 pageViews.contact should be 1 - recordView should create a new key when missing',
	)
})

await test('recordView is exported', () => {
	assert.ok(
		'recordView' in solution,
		'🚨 Make sure you export "recordView" - add: export { pageViews, recordView }',
	)
})
