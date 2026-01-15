// User Profiles
// Working with optional properties

const alice: { name: string; email: string; bio?: string; website?: string } = {
	name: 'Alice',
	email: 'alice@example.com',
}

const bob: { name: string; email: string; bio?: string; website?: string } = {
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

console.log(
	'Results:',
	JSON.stringify({
		alice,
		bob,
	}),
)
