import { testStep, expect } from '@epic-web/workshop-utils/test'
import { name, email, userId, bio, formatUserCard } from './index.ts'

await testStep('name should be destructured from user', async () => {
	expect(
		name,
		'🚨 name should be "Alice Johnson" - use const { name } = user',
	).toBe('Alice Johnson')
})

await testStep('email should be destructured from user', async () => {
	expect(
		email,
		'🚨 email should be "alice@example.com" - use const { email } = user',
	).toBe('alice@example.com')
})

await testStep('userId should be renamed from id', async () => {
	expect(
		userId,
		'🚨 userId should be "u123" - use const { id: userId } = user',
	).toBe('u123')
})

await testStep('bio should have a default value', async () => {
	expect(
		bio,
		'🚨 bio should be "No bio provided" - use const { bio = "No bio provided" } = user',
	).toBe('No bio provided')
})

await testStep(
	'formatUserCard should use parameter destructuring',
	async () => {
		const user = {
			id: 'test',
			name: 'Bob',
			email: 'bob@test.com',
			role: 'user' as const,
		}
		expect(
			formatUserCard(user),
			'🚨 formatUserCard should return formatted string with name, role, and email',
		).toBe('Bob (user) - bob@test.com')
	},
)
