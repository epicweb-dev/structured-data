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

// 🐨 Create a Map of users keyed by id

// 🐨 Read the admin user (id "u1") from the map

// 🐨 Check whether the map has a user with id "u99"

// console.log('Admin user:', adminUser)
// console.log('Has missing user:', hasMissingUser)

// 🐨 Export your variables so we can verify your work
// export { usersById, adminUser, hasMissingUser }
