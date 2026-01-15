import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { name, email, userId, bio, sampleUserCard } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

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
	assert.strictEqual(
		sampleUserCard,
		'Bob (user) - bob@test.com',
		'🚨 formatUserCard should return formatted string with name, role, and email',
	)
})
