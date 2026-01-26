import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('alice is exported', () => {
	assert.ok(
		'alice' in solution,
		'🚨 Make sure you export "alice" - add: export { alice, ... }',
	)
})

await test('User without optional properties should work', () => {
	assert.strictEqual(
		solution.alice.name,
		'Alice',
		'🚨 alice.name should be "Alice" - make sure you set the required name property',
	)
	assert.strictEqual(
		solution.alice.email,
		'alice@example.com',
		'🚨 alice.email should be "alice@example.com" - make sure you set the required email property',
	)
	assert.strictEqual(
		solution.alice.bio,
		undefined,
		'🚨 alice.bio should be undefined - optional properties can be omitted from the object',
	)
	assert.strictEqual(
		solution.alice.website,
		undefined,
		'🚨 alice.website should be undefined - optional properties can be omitted from the object',
	)
})

await test('bob is exported', () => {
	assert.ok(
		'bob' in solution,
		'🚨 Make sure you export "bob" - add: export { alice, bob }',
	)
})

await test('User with optional properties should work', () => {
	assert.strictEqual(
		solution.bob.name,
		'Bob',
		'🚨 bob.name should be "Bob" - make sure you set the required name property',
	)
	assert.strictEqual(
		solution.bob.email,
		'bob@example.com',
		'🚨 bob.email should be "bob@example.com" - make sure you set the required email property',
	)
	assert.ok(
		typeof solution.bob.bio === 'string' && solution.bob.bio.length > 0,
		'🚨 bob.bio should be a non-empty string - include a bio for bob to demonstrate optional properties',
	)
	assert.ok(
		typeof solution.bob.website === 'string' &&
			solution.bob.website.startsWith('http'),
		'🚨 bob.website should be a valid URL string - include a website for bob to demonstrate optional properties',
	)
})
