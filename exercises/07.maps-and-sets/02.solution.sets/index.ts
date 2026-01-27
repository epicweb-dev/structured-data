// Unique Values with Set
// Removing duplicates

const tags = [
	'typescript',
	'data',
	'typescript',
	'arrays',
	'data',
	'objects',
]

const uniqueTags = new Set(tags)
const hasTypeScript = uniqueTags.has('typescript')
const tagList = [...uniqueTags]

console.log('Unique tags:', tagList)
console.log('Has TypeScript:', hasTypeScript)

export { uniqueTags, hasTypeScript, tagList }
