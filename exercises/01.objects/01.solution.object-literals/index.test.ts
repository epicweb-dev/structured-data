import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('User object should have correct properties', async () => {
	const user: { name: string; age: number; email: string } = {
		name: 'Alice',
		age: 30,
		email: 'alice@example.com',
	}
	expect(user.name).toBe('Alice')
	expect(user.age).toBe(30)
	expect(user.email).toBe('alice@example.com')
})

await testStep('Admin object should have correct properties', async () => {
	const admin: { name: string; age: number; email: string } = {
		name: 'Bob',
		age: 35,
		email: 'bob@example.com',
	}
	expect(admin.name).toBe('Bob')
	expect(admin.age).toBe(35)
	expect(admin.email).toBe('bob@example.com')
})
