import { testStep, expect } from '@epic-web/workshop-utils/test'
import { updatedUser, finalConfig, userWithDarkMode, user } from './index.ts'

await testStep('updatedUser should have new email', async () => {
	expect(
		updatedUser.email,
		'🚨 updatedUser.email should be "alice.new@example.com"',
	).toBe('alice.new@example.com')
})

await testStep('original user should be unchanged', async () => {
	expect(
		user.email,
		'🚨 original user.email should still be "alice@example.com" - spread creates a new object',
	).toBe('alice@example.com')
})

await testStep('finalConfig should merge with user overriding defaults', async () => {
	expect(
		finalConfig.apiUrl,
		'🚨 finalConfig.apiUrl should come from defaults',
	).toBe('https://api.example.com')
	expect(
		finalConfig.timeout,
		'🚨 finalConfig.timeout should be 10000 from userConfig (user overrides defaults)',
	).toBe(10000)
	expect(
		finalConfig.retries,
		'🚨 finalConfig.retries should come from defaults',
	).toBe(3)
})

await testStep('userWithDarkMode should have updated nested settings', async () => {
	expect(
		userWithDarkMode.settings.theme,
		'🚨 userWithDarkMode.settings.theme should be "dark"',
	).toBe('dark')
	expect(
		userWithDarkMode.settings.notifications,
		'🚨 notifications should still be true (unchanged)',
	).toBe(true)
})

await testStep('original user settings should be unchanged', async () => {
	expect(
		user.settings.theme,
		'🚨 original user.settings.theme should still be "light" - use nested spread',
	).toBe('light')
})
