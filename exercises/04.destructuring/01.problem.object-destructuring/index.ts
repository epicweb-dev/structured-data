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

// 🐨 Use object destructuring to extract `name` and `email` from `user`
// 💰 const { name, email } = user

// 🐨 Use destructuring with renaming to extract `id` as `userId`
// 💰 const { id: userId } = user

// 🐨 Use destructuring with a default value to extract `bio` with a fallback of 'No bio provided'
// 💰 const { bio = 'No bio provided' } = user

// 🐨 Create a function `formatUserCard` that uses destructuring in its parameter
// to extract name, email, and role, then returns a formatted string
// 💰 function formatUserCard({ name, email, role }: User): string

// Test - uncomment when ready
// console.log(name) // 'Alice Johnson'
// console.log(email) // 'alice@example.com'
// console.log(userId) // 'u123'
// console.log(bio) // 'No bio provided'
// console.log(formatUserCard(user))
