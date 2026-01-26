// Task Board
// Naming object types

type Task = {
	id: number
	title: string
	completed: boolean
}

const firstTask: Task = {
	id: 1,
	title: 'Write tests',
	completed: false,
}

const secondTask: Task = {
	id: 2,
	title: 'Ship release',
	completed: true,
}

export { firstTask, secondTask }
