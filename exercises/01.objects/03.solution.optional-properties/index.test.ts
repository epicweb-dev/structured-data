import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { alice, bob } = JSON.parse(jsonLine.replace('Results:', '').trim())

await test('User without optional properties should work', () => {
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
	assert.strictEqual(
		alice.name,
		'Alice',
		'🚨 alice.name should be "Alice" - verify the name property is set correctly',
	)
	assert.strictEqual(
		bob.bio,
		'Software developer and TypeScript enthusiast',
		'🚨 bob.bio should be "Software developer and TypeScript enthusiast" - optional properties can be accessed when they exist',
	)
})
