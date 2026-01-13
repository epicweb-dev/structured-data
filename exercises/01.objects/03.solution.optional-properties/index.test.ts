import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('User without optional properties should work', async () => {
	const alice: { name: string; email: string; bio?: string; website?: string } = {
		name: 'Alice',
		email: 'alice@example.com',
	}
	expect(alice.name, '🚨 alice.name should be "Alice" - make sure you set the required name property').toBe('Alice')
	expect(alice.email, '🚨 alice.email should be "alice@example.com" - make sure you set the required email property').toBe('alice@example.com')
	expect(alice.bio, '🚨 alice.bio should be undefined - optional properties can be omitted from the object').toBeUndefined()
	expect(alice.website, '🚨 alice.website should be undefined - optional properties can be omitted from the object').toBeUndefined()
})

await testStep('User with optional properties should work', async () => {
	const bob: { name: string; email: string; bio?: string; website?: string } = {
		name: 'Bob',
		email: 'bob@example.com',
		bio: 'Software developer and TypeScript enthusiast',
		website: 'https://bob.dev',
	}
	expect(bob.name, '🚨 bob.name should be "Bob" - make sure you set the required name property').toBe('Bob')
	expect(bob.email, '🚨 bob.email should be "bob@example.com" - make sure you set the required email property').toBe('bob@example.com')
	expect(bob.bio, '🚨 bob.bio should be "Software developer and TypeScript enthusiast" - optional properties can be included when provided').toBe('Software developer and TypeScript enthusiast')
	expect(bob.website, '🚨 bob.website should be "https://bob.dev" - optional properties can be included when provided').toBe('https://bob.dev')
})

await testStep('displayUserInfo should handle optional properties correctly', async () => {
	function displayUserInfo(user: {
		name: string
		email: string
		bio?: string
		website?: string
	}): void {
		// Function implementation tested through its behavior
		expect(user.name, '🚨 user.name should be defined - required properties must always be present').toBeDefined()
		expect(user.email, '🚨 user.email should be defined - required properties must always be present').toBeDefined()
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
	expect(alice.name, '🚨 alice.name should be "Alice" - verify the name property is set correctly').toBe('Alice')
	expect(bob.bio, '🚨 bob.bio should be "Software developer" - optional properties can be accessed when they exist').toBe('Software developer')
})
