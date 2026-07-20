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
		'🚨 name should be "Alice Johnson" after destructuring from user',
	)
})

await test('email should be destructured from user', () => {
	assert.strictEqual(
		solution.email,
		'alice@example.com',
		'🚨 email should be "alice@example.com" after destructuring from user',
	)
})

await test('userId should be renamed from id', () => {
	assert.strictEqual(
		solution.userId,
		'u123',
		'🚨 userId should be "u123" (id renamed while destructuring)',
	)
})

await test('bio should have a default value', () => {
	assert.strictEqual(
		solution.bio,
		'No bio provided',
		'🚨 bio should be "No bio provided" when the property is missing and a default is applied',
	)
})

await test('formatUserCard should use parameter destructuring', () => {
	const result = solution.formatUserCard({
		id: 'test',
		name: 'Bob',
		email: 'bob@test.com',
		role: 'user',
	})
	assert.ok(
		typeof result === 'string' &&
			result.includes('Bob') &&
			result.includes('user') &&
			result.includes('bob@test.com'),
		'🚨 formatUserCard should return a string containing the name, role, and email',
	)
})
