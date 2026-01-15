// User Profiles
// Working with optional properties

// 🐨 Create a user with these properties:
// - name: string (required)
// - email: string (required)
// - bio?: string (optional)
// - website?: string (optional)
// 💰 const user: { name: string; email: string; bio?: string; website?: string }

// 🐨 Create a user named "Alice" with just name and email

// 🐨 Create a user named "Bob" with all properties filled in

// 🐨 Create a function that displays user info
// Handle the optional properties safely
// 💰 Use optional chaining: user.bio?.toUpperCase()
// 💰 Or check: if (user.bio !== undefined)

// function displayUserInfo(user: { ... }): void {
//   console.log(`Name: ${user.name}`)
//   console.log(`Email: ${user.email}`)
//   console.log(`Bio: ${user.bio ?? 'No bio provided'}`)
// }

// 🐨 When you're done, uncomment this:
// console.log(
// 	'Results JSON:',
// 	JSON.stringify({
// 		alice,
// 		bob,
// 	}),
// )
