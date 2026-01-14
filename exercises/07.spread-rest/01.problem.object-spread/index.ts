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

// 🐨 Create `updatedUser` - same as user but with email changed to 'alice.new@example.com'
// 💰 const updatedUser = { ...user, email: 'alice.new@example.com' }

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

const userConfig: Partial<Config> = {
	timeout: 10000,
}

// 🐨 Merge defaultConfig and userConfig into `finalConfig` (user overrides defaults)
// 💰 const finalConfig = { ...defaultConfig, ...userConfig }

// 🐨 Create `userWithDarkMode` - same as user but with settings.theme changed to 'dark'
// Remember: spread is shallow, so you need to spread the nested settings object too!
// 💰 const userWithDarkMode = { ...user, settings: { ...user.settings, theme: 'dark' } }

// Test - uncomment when ready
// console.log(updatedUser.email) // 'alice.new@example.com'
// console.log(user.email) // 'alice@example.com' (unchanged!)
// console.log(finalConfig.timeout) // 10000
// console.log(userWithDarkMode.settings.theme) // 'dark'
// console.log(user.settings.theme) // 'light' (unchanged!)
