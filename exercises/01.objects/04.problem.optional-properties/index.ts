// User Profiles
// Working with optional properties

// 🐨 Create a type alias called `UserProfile` with:
// - name: string
// - email: string
// - bio?: string
// - website?: string
// 💰 type UserProfile = { name: string; email: string; bio?: string; website?: string }

const alice: UserProfile = {
	name: 'Alice',
	email: 'alice@example.com',
}

const bob: UserProfile = {
	name: 'Bob',
	email: 'bob@example.com',
	bio: 'Software developer and TypeScript enthusiast',
	website: 'https://bob.dev',
}

// 🐨 Create a function that displays user info
// Handle the optional properties safely
// 💰 Use optional chaining: user.bio?.toUpperCase()
// 💰 Or check: if (user.bio !== undefined)

// function displayUserInfo(user: { ... }): void {
//   console.log(`Name: ${user.name}`)
//   console.log(`Email: ${user.email}`)
//   console.log(`Bio: ${user.bio ?? 'No bio provided'}`)
// }

// 🐨 Export your variables so we can verify your work
// export { alice, bob }
