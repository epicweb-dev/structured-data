import './app.css'
import type { Book } from './data/library-data'
import { library } from './data/library-data'
import {
	addBook,
	formatMember,
	getAvailableBooks,
	getBooksByMemberId,
	getCheckedOutBooks,
	getEventList,
	getEventSummaries,
	getMemberLookup,
	getRoomList,
	getTagCounts,
	getUniqueTags,
	mergeTags,
	summarizeLibrary,
} from './utils/practice'

export function App() {
	const { name, address } = library
	const checkedOutBooks = getCheckedOutBooks(library.books)
	const availableBooks = getAvailableBooks(library.books)
	const uniqueTags = getUniqueTags(library.books)
	const tagCounts = getTagCounts(library.books)
	const memberLookup = getMemberLookup(library.members)
	const booksByMember = getBooksByMemberId(library.books)
	const events = getEventList(library.eventsById)
	const eventSummaries = getEventSummaries(library.eventsById)
	const rooms = getRoomList(library.roomsById)
	const summary = summarizeLibrary(library)
	const tagList = Array.from(uniqueTags)
	const mergedTags = mergeTags(...library.books.map((book) => book.tags))
	const newBook: Book = {
		id: 'book-incoming',
		title: 'The Merge List',
		author: 'Serena Diaz',
		tags: ['arrays', 'reduce'],
		publishedYear: 2026,
	}
	const expandedBooks = addBook(library.books, newBook)
	const booksByMemberEntries = Array.from(booksByMember.entries())

	return (
		<div className="app">
			<header className="header">
				<div>
					<h1>{name}</h1>
					<p className="subtitle">
						{address.street}, {address.city}, {address.state} {address.zip}
					</p>
				</div>
				<div className="badge">
					<span>Community Library</span>
				</div>
			</header>

			<section className="callout">
				<h2>Today's highlights</h2>
				<p>
					Keep an eye on what is happening at the library today, from events and
					room availability to member activity and featured collections.
				</p>
			</section>

			<section className="grid">
				<div className="card">
					<h3>Library snapshot</h3>
					<ul>
						<li>Total books: {summary.totalBooks}</li>
						<li>Total members: {summary.totalMembers}</li>
						<li>Total events: {summary.totalEvents}</li>
						<li>Checked out: {summary.checkedOut}</li>
					</ul>
				</div>
				<div className="card">
					<h3>Room availability</h3>
					{rooms.length === 0 ? (
						<p>We are refreshing room details right now.</p>
					) : (
						<ul>
							{rooms.map((room) => (
								<li key={room.id}>
									{room.name} ({room.capacity} seats)
								</li>
							))}
						</ul>
					)}
				</div>
				<div className="card">
					<h3>Collection tags</h3>
					<p className="muted">Active tags: {tagList.length}</p>
					{tagList.length === 0 ? (
						<p>Tag categories are loading.</p>
					) : (
						<div className="tag-list">
							{tagList.map((tag) => (
								<span key={tag} className="tag">
									{tag}
								</span>
							))}
						</div>
					)}
					<div className="tag-counts">
						{Object.keys(tagCounts).length === 0 ? (
							<p>We are tallying tag totals.</p>
						) : (
							Object.entries(tagCounts).map(([tag, count]) => (
								<div key={tag} className="tag-row">
									<span>{tag}</span>
									<strong>{count}</strong>
								</div>
							))
						)}
					</div>
				</div>
			</section>

			<section className="grid">
				<div className="card">
					<h3>Catalog</h3>
					<p className="muted">Total titles in catalog: {expandedBooks.length}</p>
					<div className="split">
						<div>
							<h4>Checked out now</h4>
							{checkedOutBooks.length === 0 ? (
								<p>No books are currently checked out.</p>
							) : (
								<ul>
									{checkedOutBooks.map((book) => (
										<li key={book.id}>
											{book.title} —{' '}
											{memberLookup[book.checkedOutByMemberId ?? '']?.name ??
												'Unknown member'}
										</li>
									))}
								</ul>
							)}
						</div>
						<div>
							<h4>Available today</h4>
							{availableBooks.length === 0 ? (
								<p>Available titles are updating.</p>
							) : (
								<ul>
									{availableBooks.map((book) => (
										<li key={book.id}>{book.title}</li>
									))}
								</ul>
							)}
						</div>
					</div>
				</div>
				<div className="card">
					<h3>Members</h3>
					<ul>
						{library.members.map((member) => (
							<li key={member.id}>{formatMember(member)}</li>
						))}
					</ul>
					<h4>Checkout activity</h4>
					{booksByMemberEntries.length === 0 ? (
						<p>Member checkout activity is updating.</p>
					) : (
						<ul>
							{booksByMemberEntries.map(([memberId, books]) => (
								<li key={memberId}>
									{memberLookup[memberId]?.name ?? 'Unknown'}: {books.length}
								</li>
							))}
						</ul>
					)}
				</div>
				<div className="card">
					<h3>Events</h3>
					{events.length === 0 ? (
						<p>Upcoming events are loading.</p>
					) : (
						<ul>
							{events.map((event) => (
								<li key={event.id}>
									{event.name} — {event.date}
								</li>
							))}
						</ul>
					)}
					<h4>Event summaries</h4>
					{eventSummaries.length === 0 ? (
						<p>Event highlights are on the way.</p>
					) : (
						<ul>
							{eventSummaries.map((event) => (
								<li key={event.id}>
									{event.id}: {event.name}
								</li>
							))}
						</ul>
					)}
				</div>
			</section>

			<section className="card">
				<h3>Featured topics</h3>
				{mergedTags.length === 0 ? (
					<p>Featured topics will appear once the catalog refreshes.</p>
				) : (
					<p>{mergedTags.join(', ')}</p>
				)}
			</section>
		</div>
	)
}
