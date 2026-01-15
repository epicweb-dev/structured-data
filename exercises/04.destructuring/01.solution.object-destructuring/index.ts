// Object Destructuring
// Extracting values from objects into variables

type User = {
	id: string
	name: string
	email: string
	role: 'admin' | 'user'
	bio?: string
}

const user: User = {
	id: 'u123',
	name: 'Alice Johnson',
	email: 'alice@example.com',
	role: 'admin',
}

// Basic object destructuring
const { name, email } = user

// Destructuring with renaming
const { id: userId } = user

// Destructuring with default value
const { bio = 'No bio provided' } = user

// Function with parameter destructuring
function formatUserCard({ name, email, role }: User) {
	return `${name} (${role}) - ${email}`
}

console.log(name) // 'Alice Johnson'
console.log(email) // 'alice@example.com'
console.log(userId) // 'u123'
console.log(bio) // 'No bio provided'
console.log(formatUserCard(user)) // 'Alice Johnson (admin) - alice@example.com'

console.log(
	'Results JSON:',
	JSON.stringify({
		name,
		email,
		userId,
		bio,
		userCard: formatUserCard(user),
		sampleUserCard: formatUserCard({
			id: 'test',
			name: 'Bob',
			email: 'bob@test.com',
			role: 'user',
		}),
	}),
)
