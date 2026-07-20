// User Profiles
// Working with optional properties

// 🐨 Create a type alias called `UserProfile` with:
// - name: string
// - email: string
// - bio?: string
// - website?: string

// 🐨 Type this as a UserProfile (omit bio and website)
const alice = {
	name: 'Alice',
	email: 'alice@example.com',
}

// 🐨 Type this as a UserProfile (keep bio and website)
const bob = {
	name: 'Bob',
	email: 'bob@example.com',
	bio: 'Software developer and TypeScript enthusiast',
	website: 'https://bob.dev',
}

// 🐨 Create a function `displayUserInfo` that logs name and email, and safely
// handles optional bio/website (they may be undefined — use a default when missing)
// Then call it for alice and bob

// 🐨 Export alice and bob so we can verify your work
// export { alice, bob }
