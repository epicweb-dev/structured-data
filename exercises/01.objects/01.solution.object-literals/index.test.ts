import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('User object should have correct properties', async () => {
	const user: { name: string; age: number; email: string } = {
		name: 'Alice',
		age: 30,
		email: 'alice@example.com',
	}
	expect(user.name, '🚨 user.name should be "Alice" - make sure you set the name property correctly').toBe('Alice')
	expect(user.age, '🚨 user.age should be 30 - check that you set the age property to the correct number').toBe(30)
	expect(user.email, '🚨 user.email should be "alice@example.com" - verify the email property is set correctly').toBe('alice@example.com')
})

await testStep('Admin object should have correct properties', async () => {
	const admin: { name: string; age: number; email: string } = {
		name: 'Bob',
		age: 35,
		email: 'bob@example.com',
	}
	expect(admin.name, '🚨 admin.name should be "Bob" - make sure you set the name property correctly').toBe('Bob')
	expect(admin.age, '🚨 admin.age should be 35 - check that you set the age property to the correct number').toBe(35)
	expect(admin.email, '🚨 admin.email should be "bob@example.com" - verify the email property is set correctly').toBe('bob@example.com')
})
