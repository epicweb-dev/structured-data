// User Profiles
// Working with optional properties

// 🐨 Create a type alias called `UserProfile` with:
// - name: string
// - email: string
// - bio?: string
// - website?: string

// 🐨 type this as a UserProfile
const alice = {
	name: 'Alice',
	email: 'alice@example.com',
}

// 🐨 type this as a UserProfile
const bob = {
	name: 'Bob',
	email: 'bob@example.com',
	bio: 'Software developer and TypeScript enthusiast',
	website: 'https://bob.dev',
}

// 🐨 Create a function that displays user info
// Handle the optional properties safely
// 💰 Safely handle missing optional values before using them

// function displayUserInfo(user: { ... }): void {
//   console.log(`Name: ${user.name}`)
//   console.log(`Email: ${user.email}`)
//   console.log(`Bio: ${user.bio ?? 'No bio provided'}`)
// }

// 🐨 Export your variables so we can verify your work
// export { alice, bob }
