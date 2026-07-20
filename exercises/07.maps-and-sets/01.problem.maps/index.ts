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

// 🐨 Create `usersById`: a Map of users keyed by id (size 3)

// 🐨 Create `adminUser` by reading id "u1" from the map
// Expected: name === 'Ava'

// 🐨 Create `hasMissingUser` by checking whether the map has id "u99"
// Expected: false

// console.log('Admin user:', adminUser)
// console.log('Has missing user:', hasMissingUser)

// 🐨 Export usersById, adminUser, and hasMissingUser
// export { usersById, adminUser, hasMissingUser }
