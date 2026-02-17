import type { Book, Event, Library, Member, Room } from '../data/library-data'

export const getCheckedOutBooks = (books: Array<Book>) => {
	// 🐨 Return only books with a checkedOutByMemberId
	return books.filter((book) => Boolean(book.checkedOutByMemberId))
}

export const getAvailableBooks = (books: Array<Book>) => {
	// 🐨 Return only books that are NOT checked out
	return books.filter((book) => !book.checkedOutByMemberId)
}

export const getUniqueTags = (books: Array<Book>) => {
	// 🐨 Return a Set of every unique tag across all books
	return new Set(books.flatMap((book) => book.tags))
}

export const getTagCounts = (books: Array<Book>) => {
	// 🐨 Build an object like { tagName: count }
	return books.reduce((tagCounts, book) => {
		for (const tag of book.tags) {
			tagCounts[tag] = (tagCounts[tag] ?? 0) + 1
		}
		return tagCounts
	}, {} as Record<string, number>)
}

export const getMemberLookup = (members: Array<Member>) => {
	// 🐨 Use Object.fromEntries (or reduce) to create a lookup by id
	return Object.fromEntries(members.map((member) => [member.id, member])) as Record<
		string,
		Member
	>
}

export const getBooksByMemberId = (books: Array<Book>) => {
	// 🐨 Use a Map where key = memberId and value = Array<Book>
	const booksByMemberId = new Map<string, Array<Book>>()

	for (const book of books) {
		const memberId = book.checkedOutByMemberId
		if (!memberId) continue

		const existing = booksByMemberId.get(memberId)
		if (existing) {
			existing.push(book)
		} else {
			booksByMemberId.set(memberId, [book])
		}
	}

	return booksByMemberId
}

export const getEventList = (eventsById: Record<string, Event>) => {
	// 🐨 Return an array of events using Object.values
	return Object.values(eventsById)
}

export const getEventSummaries = (eventsById: Record<string, Event>) => {
	// 🐨 Use Object.entries to return { id, name } objects
	return Object.entries(eventsById).map(([id, event]) => ({
		id,
		name: event.name,
	}))
}

export const getRoomList = (roomsById: Record<string, Room>) => {
	// 🐨 Convert roomsById into an array of rooms
	return Object.values(roomsById)
}

export const addBook = (books: Array<Book>, newBook: Book) => {
	// 🐨 Return a NEW array with newBook added (no mutation)
	return [...books, newBook]
}

export const mergeTags = (...tagLists: Array<Array<string>>) => {
	// 🐨 Combine all tags into a unique array (hint: Set + spread)
	return Array.from(new Set(tagLists.flat()))
}

export const summarizeLibrary = (library: Library) => {
	// 🐨 Return an object with totalBooks, totalMembers, totalEvents, checkedOut
	const checkedOut = library.books.filter((book) =>
		Boolean(book.checkedOutByMemberId),
	).length

	return {
		totalBooks: library.books.length,
		totalMembers: library.members.length,
		totalEvents: Object.keys(library.eventsById).length,
		checkedOut,
	}
}

export const formatMember = ({ name, email }: Member) => {
	// 🐨 Use destructuring + template strings for a friendly label
	return `${name}${email ? ` (${email})` : ''}`
}
