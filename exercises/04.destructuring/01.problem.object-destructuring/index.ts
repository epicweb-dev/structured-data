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
// Expected: name === 'Alice Johnson', email === 'alice@example.com'

// 🐨 Use destructuring with renaming to extract `id` as `userId`
// Expected: userId === 'u123'

// 🐨 Use destructuring with a default value to extract `bio`
// with a fallback of 'No bio provided'
// Expected: bio === 'No bio provided'

// 🐨 Create a function `formatUserCard` that uses destructuring in its parameter
// to extract name, email, and role, then returns a string that includes all three

// Test - uncomment when ready
// console.log(name) // 'Alice Johnson'
// console.log(email) // 'alice@example.com'
// console.log(userId) // 'u123'
// console.log(bio) // 'No bio provided'
// console.log(formatUserCard(user))

// 🐨 Export your variables and function so we can verify your work
// export { name, email, userId, bio, formatUserCard }
