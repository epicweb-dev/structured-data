// Map Lookups
// Fast access by key

type User = {
	id: string
	name: string
	role: 'admin' | 'member'
}

const users: Array<User> = [
	{ id: 'u1', name: 'Ava', role: 'admin' },
	{ id: 'u2', name: 'Ben', role: 'member' },
	{ id: 'u3', name: 'Chris', role: 'member' },
]

const usersById = new Map(users.map((user) => [user.id, user]))
const adminUser = usersById.get('u1')
const hasMissingUser = usersById.has('u99')

console.log('Admin user:', adminUser)
console.log('Has missing user:', hasMissingUser)

export { usersById, adminUser, hasMissingUser }
