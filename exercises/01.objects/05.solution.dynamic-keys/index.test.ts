import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('errorPages is exported', () => {
	assert.ok(
		'errorPages' in solution,
		'🚨 Make sure you export "errorPages" - add: export { errorPages }',
	)
})

await test('errorPages should include computed keys', () => {
	assert.strictEqual(
		solution.errorPages['404-status'],
		'/not-found',
		'🚨 errorPages["404-status"] should be "/not-found" - use the computed key',
	)
	assert.strictEqual(
		solution.errorPages['500-status'],
		'/server-error',
		'🚨 errorPages["500-status"] should be "/server-error" - use the computed key',
	)
})
