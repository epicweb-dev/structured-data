// Object Spread
// Creating new objects with updated values immutably

type User = {
	id: string
	name: string
	email: string
	settings: {
		theme: 'light' | 'dark'
		notifications: boolean
	}
}

const user: User = {
	id: 'u1',
	name: 'Alice',
	email: 'alice@example.com',
	settings: {
		theme: 'light',
		notifications: true,
	},
}

// 🐨 Create `updatedUser` - same as user but with email 'alice.new@example.com'
// Do not mutate `user` (user.email should stay 'alice@example.com')
// 💰 Spread syntax creates a new object

type Config = {
	apiUrl: string
	timeout: number
	retries: number
}

const defaultConfig: Config = {
	apiUrl: 'https://api.example.com',
	timeout: 5000,
	retries: 3,
}

// userConfig only overrides some properties
const userConfig: { timeout: number } = {
	timeout: 10000,
}

// 🐨 Merge defaultConfig and userConfig into `finalConfig` (user overrides defaults)
// Expected: apiUrl from defaults, timeout 10000, retries 3
// 💰 The order of spread operations matters

// 🐨 Create `userWithDarkMode` - same as user but settings.theme is 'dark'
// Keep notifications true. Do not mutate user.settings.theme (stays 'light')
// 💰 Nested objects need their own spread

// Test - uncomment when ready
// console.log(updatedUser.email) // 'alice.new@example.com'
// console.log(user.email) // 'alice@example.com' (unchanged!)
// console.log(finalConfig.timeout) // 10000
// console.log(userWithDarkMode.settings.theme) // 'dark'
// console.log(user.settings.theme) // 'light' (unchanged!)

// 🐨 Export updatedUser, user, finalConfig, and userWithDarkMode
// export { updatedUser, user, finalConfig, userWithDarkMode }
