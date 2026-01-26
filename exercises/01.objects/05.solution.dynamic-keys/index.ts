// Error Pages
// Computed property names in object literals

const notFoundKey = '404-status'
const serverErrorKey = '500-status'

const notFoundPath = '/not-found'
const serverErrorPath = '/server-error'

const errorPages = {
	[notFoundKey]: notFoundPath,
	[serverErrorKey]: serverErrorPath,
}

export { errorPages }
