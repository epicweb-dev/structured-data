import assert from 'node:assert/strict'
import { test } from 'node:test'
// @ts-ignore - playground may not have correct types initially
import * as solution from './index.ts'

await test('user is exported', () => {
	assert.ok(
		'user' in solution,
		'🚨 Make sure you export "user" - add: export { user, ... }',
	)
})

await test('User object should have correct properties', () => {
	assert.strictEqual(
		solution.user.name,
		'Alice',
		'🚨 user.name should be "Alice" - make sure you set the name property correctly',
	)
	assert.strictEqual(
		solution.user.age,
		30,
		'🚨 user.age should be 30 - check that you set the age property to the correct number',
	)
	assert.strictEqual(
		solution.user.email,
		'alice@example.com',
		'🚨 user.email should be "alice@example.com" - verify the email property is set correctly',
	)
})

await test('admin is exported', () => {
	assert.ok(
		'admin' in solution,
		'🚨 Make sure you export "admin" - add: export { user, admin }',
	)
})

await test('Admin object should have correct properties', () => {
	assert.strictEqual(
		solution.admin.name,
		'Bob',
		'🚨 admin.name should be "Bob" - make sure you set the name property correctly',
	)
	assert.strictEqual(
		solution.admin.age,
		35,
		'🚨 admin.age should be 35 - check that you set the age property to the correct number',
	)
	assert.strictEqual(
		solution.admin.email,
		'bob@example.com',
		'🚨 admin.email should be "bob@example.com" - verify the email property is set correctly',
	)
})
