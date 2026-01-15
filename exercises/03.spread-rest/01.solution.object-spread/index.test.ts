import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output
	.split('\n')
	.find((line) => line.startsWith('Results JSON:'))
assert.ok(jsonLine, '🚨 Missing "Results JSON:" output line')
const {
	updatedEmail,
	originalEmail,
	finalConfig,
	darkTheme,
	originalTheme,
	notifications,
} = JSON.parse(jsonLine.replace('Results JSON:', '').trim())

await test('updatedUser should have new email', () => {
	assert.strictEqual(
		updatedEmail,
		'alice.new@example.com',
		'🚨 updatedUser.email should be "alice.new@example.com"',
	)
})

await test('original user should be unchanged', () => {
	assert.strictEqual(
		originalEmail,
		'alice@example.com',
		'🚨 original user.email should still be "alice@example.com" - spread creates a new object',
	)
})

await test('finalConfig should merge with user overriding defaults', () => {
	assert.strictEqual(
		finalConfig.apiUrl,
		'https://api.example.com',
		'🚨 finalConfig.apiUrl should come from defaults',
	)
	assert.strictEqual(
		finalConfig.timeout,
		10000,
		'🚨 finalConfig.timeout should be 10000 from userConfig (user overrides defaults)',
	)
	assert.strictEqual(
		finalConfig.retries,
		3,
		'🚨 finalConfig.retries should come from defaults',
	)
})

await test('userWithDarkMode should have updated nested settings', () => {
	assert.strictEqual(
		darkTheme,
		'dark',
		'🚨 userWithDarkMode.settings.theme should be "dark"',
	)
	assert.strictEqual(
		notifications,
		true,
		'🚨 notifications should still be true (unchanged)',
	)
})

await test('original user settings should be unchanged', () => {
	assert.strictEqual(
		originalTheme,
		'light',
		'🚨 original user.settings.theme should still be "light" - use nested spread',
	)
})
