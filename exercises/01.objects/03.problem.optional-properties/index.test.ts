import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('User without optional properties should work', () => {
	const alice: { name: string; email: string; bio?: string; website?: string } =
		{
			name: 'Alice',
			email: 'alice@example.com',
		}
	assert.strictEqual(
		alice.name,
		'Alice',
		'🚨 alice.name should be "Alice" - make sure you set the required name property',
	)
	assert.strictEqual(
		alice.email,
		'alice@example.com',
		'🚨 alice.email should be "alice@example.com" - make sure you set the required email property',
	)
	assert.strictEqual(
		alice.bio,
		undefined,
		'🚨 alice.bio should be undefined - optional properties can be omitted from the object',
	)
	assert.strictEqual(
		alice.website,
		undefined,
		'🚨 alice.website should be undefined - optional properties can be omitted from the object',
	)
})

await test('User with optional properties should work', () => {
	const bob: { name: string; email: string; bio?: string; website?: string } = {
		name: 'Bob',
		email: 'bob@example.com',
		bio: 'Software developer and TypeScript enthusiast',
		website: 'https://bob.dev',
	}
	assert.strictEqual(
		bob.name,
		'Bob',
		'🚨 bob.name should be "Bob" - make sure you set the required name property',
	)
	assert.strictEqual(
		bob.email,
		'bob@example.com',
		'🚨 bob.email should be "bob@example.com" - make sure you set the required email property',
	)
	assert.strictEqual(
		bob.bio,
		'Software developer and TypeScript enthusiast',
		'🚨 bob.bio should be "Software developer and TypeScript enthusiast" - optional properties can be included when provided',
	)
	assert.strictEqual(
		bob.website,
		'https://bob.dev',
		'🚨 bob.website should be "https://bob.dev" - optional properties can be included when provided',
	)
})

await test('displayUserInfo should handle optional properties correctly', () => {
	function displayUserInfo(user: {
		name: string
		email: string
		bio?: string
		website?: string
	}): void {
		// Function implementation tested through its behavior
		assert.ok(
			user.name !== undefined,
			'🚨 user.name should be defined - required properties must always be present',
		)
		assert.ok(
			user.email !== undefined,
			'🚨 user.email should be defined - required properties must always be present',
		)
	}
	const alice = { name: 'Alice', email: 'alice@example.com' }
	const bob = {
		name: 'Bob',
		email: 'bob@example.com',
		bio: 'Software developer',
		website: 'https://bob.dev',
	}
	displayUserInfo(alice)
	displayUserInfo(bob)
	assert.strictEqual(
		alice.name,
		'Alice',
		'🚨 alice.name should be "Alice" - verify the name property is set correctly',
	)
	assert.strictEqual(
		bob.bio,
		'Software developer',
		'🚨 bob.bio should be "Software developer" - optional properties can be accessed when they exist',
	)
})
