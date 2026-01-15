import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { user, admin } = JSON.parse(jsonLine.replace('Results:', '').trim())

await test('User object should have correct properties', () => {
	assert.strictEqual(
		user.name,
		'Alice',
		'🚨 user.name should be "Alice" - make sure you set the name property correctly',
	)
	assert.strictEqual(
		user.age,
		30,
		'🚨 user.age should be 30 - check that you set the age property to the correct number',
	)
	assert.strictEqual(
		user.email,
		'alice@example.com',
		'🚨 user.email should be "alice@example.com" - verify the email property is set correctly',
	)
})

await test('Admin object should have correct properties', () => {
	assert.strictEqual(
		admin.name,
		'Bob',
		'🚨 admin.name should be "Bob" - make sure you set the name property correctly',
	)
	assert.strictEqual(
		admin.age,
		35,
		'🚨 admin.age should be 35 - check that you set the age property to the correct number',
	)
	assert.strictEqual(
		admin.email,
		'bob@example.com',
		'🚨 admin.email should be "bob@example.com" - verify the email property is set correctly',
	)
})
