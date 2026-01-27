// 👨‍💼 You now know a lot about structured data in TypeScript. This extra is a
// single-file, real-world practice set that touches every topic in the
// workshop: objects, arrays, spread/rest, destructuring, array methods, object
// methods, Maps, and Sets.
//
// 📜 There are no solutions here. The goal is to build confidence by applying
// the skills in lots of small, focused tasks.
//
// ---
//
// ## Project theme: "Neighborhood Library"
//
// You're helping a small library track books, members, and events.
//
// Start by creating these types (or just rely on inference where it makes sense):
//
// - Book (with id, title, author, tags, publishedYear, and optional
//   checkedOutByMemberId)
// - Member (with id, name, favoriteGenres, optional email)
// - Event (with id, name, date, attendeeIds)
//
// Create a single object called library with this shape:
//
// - name (string)
// - address (object with street, city, state, zip)
// - books (array of Book)
// - members (array of Member)
// - eventsById (object keyed by event id)
//
// 🐨 Goal: Keep all of your code in a single .ts file (name it anything you
// want), and run it with node if you'd like.
//
// ---
//
// ## Objects
//
// 🐨 Create 6-8 books and 4-5 members. Make sure to include:
// - At least two books with the same tag
// - At least one book with no checkedOutByMemberId
// - At least one member with no email
//
// 🐨 Add a new genre property to each book using a single function (no manual edits).
//
// 🐨 Create a memberLookup object where the keys are member ids and the values
// are the member objects.
//
// ---
//
// ## Arrays + Iteration
//
// 🐨 Create a checkedOutBooks array that only includes books that are checked out.
//
// 🐨 Create a bookTitles array containing just the titles.
//
// 🐨 Create an array of book + member pairs for checked out books, e.g.
// { book, member }.
//
// 🐨 Use a for...of loop to build a tagCounts object (keyed by tag).
//
// ---
//
// ## Spread + Rest
//
// 🐨 Write a function addBook(library, newBook) that returns a new library
// object with the book added.
//
// 🐨 Write a function updateMemberEmail(members, memberId, email) that returns a
// new members array with the update applied (no mutation).
//
// 🐨 Write a function mergeTags(...tagLists) that combines multiple tag arrays
// into a single unique list.
//
// ---
//
// ## Destructuring
//
// 🐨 Destructure the library address into city and state, and print them.
//
// 🐨 Destructure the first two books as firstBook and secondBook.
//
// 🐨 Write a function formatBook({ title, author, publishedYear }) that returns
// "Title — Author (Year)".
//
// ---
//
// ## Array Methods (map/filter/reduce)
//
// 🐨 Create recentBooks (published in the last 5 years).
//
// 🐨 Create memberNamesSorted in alphabetical order.
//
// 🐨 Use reduce to calculate the average published year.
//
// 🐨 Use reduce to build a booksByAuthor object.
//
// ---
//
// ## Object Methods (keys/values/entries/fromEntries)
//
// 🐨 Use Object.keys on eventsById to get all event ids.
//
// 🐨 Use Object.values to get an array of events.
//
// 🐨 Use Object.entries to create a list of { id, name } for events.
//
// 🐨 Use Object.fromEntries to turn the list back into an object keyed by id.
//
// ---
//
// ## Maps + Sets
//
// 🐨 Create a Set of all unique tags across the library.
//
// 🐨 Create a Map where the key is a member id and the value is an array of
// books they have checked out.
//
// 🐨 Use your Map to print a message like:
// "Member {name} has {count} books checked out."
//
// ---
//
// ## Stretch Ideas
//
// 🐨 Create a function findBooksByTags(books, tags) that returns books matching
// all tags.
//
// 🐨 Create a function getMostPopularTag(books) that returns the tag used most.
//
// 🐨 Build a "book recommendations" list for a member based on their
// favoriteGenres.
