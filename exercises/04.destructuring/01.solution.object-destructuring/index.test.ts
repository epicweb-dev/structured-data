import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('name is exported', () => {
	assert.ok(
		'name' in solution,
		'🚨 Make sure you export "name" - add: export { name, ... }',
	)
})

await test('email is exported', () => {
	assert.ok(
		'email' in solution,
		'🚨 Make sure you export "email" - add: export { email, ... }',
	)
})

await test('userId is exported', () => {
	assert.ok(
		'userId' in solution,
		'🚨 Make sure you export "userId" - add: export { userId, ... }',
	)
})

await test('bio is exported', () => {
	assert.ok(
		'bio' in solution,
		'🚨 Make sure you export "bio" - add: export { bio, ... }',
	)
})

await test('formatUserCard is exported', () => {
	assert.ok(
		'formatUserCard' in solution,
		'🚨 Make sure you export "formatUserCard" - add: export { formatUserCard, ... }',
	)
})

await test('name should be destructured from user', () => {
	assert.strictEqual(
		solution.name,
		'Alice Johnson',
		'🚨 name should be "Alice Johnson" - use const { name } = user',
	)
})

await test('email should be destructured from user', () => {
	assert.strictEqual(
		solution.email,
		'alice@example.com',
		'🚨 email should be "alice@example.com" - use const { email } = user',
	)
})

await test('userId should be renamed from id', () => {
	assert.strictEqual(
		solution.userId,
		'u123',
		'🚨 userId should be "u123" - use const { id: userId } = user',
	)
})

await test('bio should have a default value', () => {
	assert.strictEqual(
		solution.bio,
		'No bio provided',
		'🚨 bio should be "No bio provided" - use const { bio = "No bio provided" } = user',
	)
})

await test('formatUserCard should use parameter destructuring', () => {
	assert.strictEqual(
		solution.formatUserCard({
			id: 'test',
			name: 'Bob',
			email: 'bob@test.com',
			role: 'user',
		}),
		'Bob (user) - bob@test.com',
		'🚨 formatUserCard should return formatted string with name, role, and email',
	)
})
