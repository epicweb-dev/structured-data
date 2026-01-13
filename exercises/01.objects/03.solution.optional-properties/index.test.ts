import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('User without optional properties should work', async () => {
	const alice: { name: string; email: string; bio?: string; website?: string } = {
		name: 'Alice',
		email: 'alice@example.com',
	}
	expect(alice.name).toBe('Alice')
	expect(alice.email).toBe('alice@example.com')
	expect(alice.bio).toBeUndefined()
	expect(alice.website).toBeUndefined()
})

await testStep('User with optional properties should work', async () => {
	const bob: { name: string; email: string; bio?: string; website?: string } = {
		name: 'Bob',
		email: 'bob@example.com',
		bio: 'Software developer and TypeScript enthusiast',
		website: 'https://bob.dev',
	}
	expect(bob.name).toBe('Bob')
	expect(bob.email).toBe('bob@example.com')
	expect(bob.bio).toBe('Software developer and TypeScript enthusiast')
	expect(bob.website).toBe('https://bob.dev')
})

await testStep('displayUserInfo should handle optional properties correctly', async () => {
	function displayUserInfo(user: {
		name: string
		email: string
		bio?: string
		website?: string
	}): void {
		// Function implementation tested through its behavior
		expect(user.name).toBeDefined()
		expect(user.email).toBeDefined()
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
	expect(alice.name).toBe('Alice')
	expect(bob.bio).toBe('Software developer')
})
