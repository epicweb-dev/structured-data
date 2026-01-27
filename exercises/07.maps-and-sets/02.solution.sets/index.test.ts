import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('uniqueTags is exported', () => {
	assert.ok(
		'uniqueTags' in solution,
		'🚨 Make sure you export "uniqueTags"',
	)
})

await test('hasTypeScript is exported', () => {
	assert.ok(
		'hasTypeScript' in solution,
		'🚨 Make sure you export "hasTypeScript"',
	)
})

await test('tagList is exported', () => {
	assert.ok('tagList' in solution, '🚨 Make sure you export "tagList"')
})

await test('uniqueTags should be a Set with unique values', () => {
	assert.ok(
		solution.uniqueTags instanceof Set,
		'🚨 uniqueTags should be a Set',
	)
	assert.strictEqual(
		solution.uniqueTags.size,
		4,
		'🚨 uniqueTags should contain 4 unique values',
	)
})

await test('hasTypeScript should be true', () => {
	assert.strictEqual(
		solution.hasTypeScript,
		true,
		'🚨 hasTypeScript should be true for "typescript"',
	)
})

await test('tagList should contain the unique tags', () => {
	assert.deepStrictEqual(
		solution.tagList,
		['typescript', 'data', 'arrays', 'objects'],
		'🚨 tagList should contain unique tags in insertion order',
	)
})
