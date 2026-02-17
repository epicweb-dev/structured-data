import type { Book, Event, Library, Member, Room } from '../data/library-data'

export const getCheckedOutBooks = (books: Array<Book>) => {
	// 🐨 Return only books with a checkedOutByMemberId
	void books
	return [] as Array<Book>
}

export const getAvailableBooks = (books: Array<Book>) => {
	// 🐨 Return only books that are NOT checked out
	void books
	return [] as Array<Book>
}

export const getUniqueTags = (books: Array<Book>) => {
	// 🐨 Return a Set of every unique tag across all books
	void books
	return new Set<string>()
}

export const getTagCounts = (books: Array<Book>) => {
	// 🐨 Build an object like { tagName: count }
	void books
	return {} as Record<string, number>
}

export const getMemberLookup = (members: Array<Member>) => {
	// 🐨 Use Object.fromEntries (or reduce) to create a lookup by id
	void members
	return {} as Record<string, Member>
}

export const getBooksByMemberId = (books: Array<Book>) => {
	// 🐨 Use a Map where key = memberId and value = Array<Book>
	void books
	return new Map<string, Array<Book>>()
}

export const getEventList = (eventsById: Record<string, Event>) => {
	// 🐨 Return an array of events using Object.values
	void eventsById
	return [] as Array<Event>
}

export const getEventSummaries = (eventsById: Record<string, Event>) => {
	// 🐨 Use Object.entries to return { id, name } objects
	void eventsById
	return [] as Array<{ id: string; name: string }>
}

export const getRoomList = (roomsById: Record<string, Room>) => {
	// 🐨 Convert roomsById into an array of rooms
	void roomsById
	return [] as Array<Room>
}

export const addBook = (books: Array<Book>, newBook: Book) => {
	// 🐨 Return a NEW array with newBook added (no mutation)
	void newBook
	return books
}

export const mergeTags = (...tagLists: Array<Array<string>>) => {
	// 🐨 Combine all tags into a unique array (hint: Set + spread)
	void tagLists
	return [] as Array<string>
}

export const summarizeLibrary = (library: Library) => {
	// 🐨 Return an object with totalBooks, totalMembers, totalEvents, checkedOut
	void library
	return {
		totalBooks: 0,
		totalMembers: 0,
		totalEvents: 0,
		checkedOut: 0,
	}
}

export const formatMember = ({ name, email }: Member) => {
	// 🐨 Use destructuring + template strings for a friendly label
	return `${name}${email ? ` (${email})` : ''}`
}
