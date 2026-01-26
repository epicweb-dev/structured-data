// User Profiles
// Working with optional properties

type UserProfile = {
	name: string
	email: string
	bio?: string
	website?: string
}

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

function displayUserInfo(user: {
	name: string
	email: string
	bio?: string
	website?: string
}): void {
	console.log(`Name: ${user.name}`)
	console.log(`Email: ${user.email}`)
	console.log(`Bio: ${user.bio ?? 'No bio provided'}`)
	console.log(`Website: ${user.website ?? 'No website'}`)
	console.log('---')
}

displayUserInfo(alice)
displayUserInfo(bob)

export { alice, bob }
