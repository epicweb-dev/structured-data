import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('updatedUser is exported', () => {
	assert.ok(
		'updatedUser' in solution,
		'🚨 Make sure you export "updatedUser" - add: export { updatedUser, ... }',
	)
})

await test('user is exported', () => {
	assert.ok(
		'user' in solution,
		'🚨 Make sure you export "user" - add: export { user, ... }',
	)
})

await test('finalConfig is exported', () => {
	assert.ok(
		'finalConfig' in solution,
		'🚨 Make sure you export "finalConfig" - add: export { finalConfig, ... }',
	)
})

await test('userWithDarkMode is exported', () => {
	assert.ok(
		'userWithDarkMode' in solution,
		'🚨 Make sure you export "userWithDarkMode" - add: export { userWithDarkMode, ... }',
	)
})

await test('updatedUser should have new email', () => {
	assert.strictEqual(
		solution.updatedUser.email,
		'alice.new@example.com',
		'🚨 updatedUser.email should be "alice.new@example.com"',
	)
})

await test('original user should be unchanged', () => {
	assert.strictEqual(
		solution.user.email,
		'alice@example.com',
		'🚨 original user.email should still be "alice@example.com" (do not mutate user)',
	)
})

await test('finalConfig should merge with user overriding defaults', () => {
	assert.strictEqual(
		solution.finalConfig.apiUrl,
		'https://api.example.com',
		'🚨 finalConfig.apiUrl should come from defaults',
	)
	assert.strictEqual(
		solution.finalConfig.timeout,
		10000,
		'🚨 finalConfig.timeout should be 10000 from userConfig (user overrides defaults)',
	)
	assert.strictEqual(
		solution.finalConfig.retries,
		3,
		'🚨 finalConfig.retries should come from defaults',
	)
})

await test('userWithDarkMode should have updated nested settings', () => {
	assert.strictEqual(
		solution.userWithDarkMode.settings.theme,
		'dark',
		'🚨 userWithDarkMode.settings.theme should be "dark"',
	)
	assert.strictEqual(
		solution.userWithDarkMode.settings.notifications,
		true,
		'🚨 notifications should still be true (unchanged)',
	)
})

await test('original user settings should be unchanged', () => {
	assert.strictEqual(
		solution.user.settings.theme,
		'light',
		'🚨 original user.settings.theme should still be "light" (nested update must not mutate user)',
	)
})
