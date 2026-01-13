import assert from 'node:assert/strict'
import { test } from 'node:test'
import { name, email, userId, bio, formatUserCard } from './index.ts'

await test('name should be destructured from user', () => {
	assert.strictEqual(
		name,
		'Alice Johnson',
		'🚨 name should be "Alice Johnson" - use const { name } = user',
	)
})

await test('email should be destructured from user', () => {
	assert.strictEqual(
		email,
		'alice@example.com',
		'🚨 email should be "alice@example.com" - use const { email } = user',
	)
})

await test('userId should be renamed from id', () => {
	assert.strictEqual(
		userId,
		'u123',
		'🚨 userId should be "u123" - use const { id: userId } = user',
	)
})

await test('bio should have a default value', () => {
	assert.strictEqual(
		bio,
		'No bio provided',
		'🚨 bio should be "No bio provided" - use const { bio = "No bio provided" } = user',
	)
})

await test('formatUserCard should use parameter destructuring', () => {
	const user = {
		id: 'test',
		name: 'Bob',
		email: 'bob@test.com',
		role: 'user' as const,
	}
	assert.strictEqual(
		formatUserCard(user),
		'Bob (user) - bob@test.com',
		'🚨 formatUserCard should return formatted string with name, role, and email',
	)
})
