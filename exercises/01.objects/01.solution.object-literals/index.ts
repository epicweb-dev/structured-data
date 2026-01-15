// User Management System
// Creating typed objects

const user: { name: string; age: number; email: string } = {
	name: 'Alice',
	age: 30,
	email: 'alice@example.com',
}

const admin: { name: string; age: number; email: string } = {
	name: 'Bob',
	age: 35,
	email: 'bob@example.com',
}

console.log(`User: ${user.name}, Age: ${user.age}`)
console.log(`Admin: ${admin.name}, Age: ${admin.age}`)

// export { user, admin }
