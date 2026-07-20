import type { Book, Event, Library, Member, Room } from '../data/library-data'

export const getCheckedOutBooks = (books: Array<Book>) => {
	// 🐨 Return only books that have a checkedOutByMemberId
	return [] as Array<Book>
}

export const getAvailableBooks = (books: Array<Book>) => {
	// 🐨 Return only books that do NOT have a checkedOutByMemberId
	return [] as Array<Book>
}

export const getUniqueTags = (books: Array<Book>) => {
	// 🐨 Return a Set of every unique tag across all books
	return new Set<string>()
}

export const getTagCounts = (books: Array<Book>) => {
	// 🐨 Return { [tagName]: count } for every tag occurrence
	return {} as Record<string, number>
}

export const getMemberLookup = (members: Array<Member>) => {
	// 🐨 Return { [memberId]: member }
	return {} as Record<string, Member>
}

export const getBooksByMemberId = (books: Array<Book>) => {
	// 🐨 Return a Map keyed by memberId → array of books they have checked out
	// Skip books without checkedOutByMemberId
	return new Map<string, Array<Book>>()
}

export const getEventList = (eventsById: Record<string, Event>) => {
	// 🐨 Return an array of all events from eventsById
	return [] as Array<Event>
}

export const getEventSummaries = (eventsById: Record<string, Event>) => {
	// 🐨 Return an array of { id, name } for each event
	return [] as Array<{ id: string; name: string }>
}

export const getRoomList = (roomsById: Record<string, Room>) => {
	// 🐨 Return an array of all rooms from roomsById
	return [] as Array<Room>
}

export const addBook = (books: Array<Book>, newBook: Book) => {
	// 🐨 Return a NEW array with newBook appended (do not mutate `books`)
	return books
}

export const mergeTags = (...tagLists: Array<Array<string>>) => {
	// 🐨 Combine all tags into one unique array (first-seen order is fine)
	return [] as Array<string>
}

export const summarizeLibrary = (library: Library) => {
	// 🐨 Return { totalBooks, totalMembers, totalEvents, checkedOut }
	// using the library's books, members, events, and checked-out book count
	return {
		totalBooks: 0,
		totalMembers: 0,
		totalEvents: 0,
		checkedOut: 0,
	}
}

export const formatMember = ({ name, email }: Member) => {
	// 🐨 Intentionally blank until implemented — the Members section shows a
	// loading message while this returns an empty string.
	// Return the member's name alone when email is missing, otherwise the name
	// with the email in parentheses. The parameter is already destructured.
	return ''
}
