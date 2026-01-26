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
// 💰 Destructure the needed fields from the user object

// 🐨 Use destructuring with renaming to extract `id` as `userId`
// 💰 Rename the id property while destructuring

// 🐨 Use destructuring with a default value to extract `bio` with a fallback of 'No bio provided'
// 💰 Provide a default for the optional bio

// 🐨 Create a function `formatUserCard` that uses destructuring in its parameter
// to extract name, email, and role, then returns a formatted string
// 💰 Destructure the needed fields in the function parameter

// Test - uncomment when ready
// console.log(name) // 'Alice Johnson'
// console.log(email) // 'alice@example.com'
// console.log(userId) // 'u123'
// console.log(bio) // 'No bio provided'
// console.log(formatUserCard(user))

// 🐨 Export your variables and function so we can verify your work
// export { name, email, userId, bio, formatUserCard }
