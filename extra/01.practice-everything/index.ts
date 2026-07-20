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
// - Book: id, title, author, tags (string[]), publishedYear, optional
//   checkedOutByMemberId
// - Member: id, name, favoriteGenres (string[]), optional email
// - Event: id, name, date, attendeeIds (string[])
//
// Create a single object called `library` with this shape:
//
// - name (string)
// - address (object with street, city, state, zip)
// - books (array of Book)
// - members (array of Member)
// - eventsById (object keyed by event id → Event)
//
// 🐨 Goal: Keep all of your code in this file and run it with node if you'd like.
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
// 🐨 Write a function that takes a book and returns a new book with an added
// `genre` string property (derive it however you like, e.g. from the first tag).
// Map that function over your books instead of editing each object by hand.
//
// 🐨 Create a `memberLookup` object where the keys are member ids and the values
// are the member objects.
//
// ---
//
// ## Arrays + Iteration
//
// 🐨 Create a `checkedOutBooks` array that only includes books that are checked out
// (checkedOutByMemberId is present).
//
// 🐨 Create a `bookTitles` array containing just the titles (same order as books).
//
// 🐨 Create an array of `{ book, member }` pairs for checked out books
// (look up the member from checkedOutByMemberId).
//
// 🐨 Use a for...of loop to build a `tagCounts` object (keyed by tag → count).
//
// ---
//
// ## Spread + Rest
//
// 🐨 Write `addBook(library, newBook)` that returns a new library object with the
// book added (do not mutate the original books array).
//
// 🐨 Write `updateMemberEmail(members, memberId, email)` that returns a new
// members array with that member's email updated (no mutation).
//
// 🐨 Write `mergeTags(...tagLists)` that combines multiple tag arrays into a
// single unique list (first-seen order is fine).
//
// ---
//
// ## Destructuring
//
// 🐨 Destructure the library address into `city` and `state`, and print them.
//
// 🐨 Destructure the first two books as `firstBook` and `secondBook`.
//
// 🐨 Write `formatBook({ title, author, publishedYear })` that returns
// "Title — Author (Year)" using an em dash (—) between title and author.
//
// ---
//
// ## Array Methods (map/filter/reduce)
//
// 🐨 Create `recentBooks`: books with publishedYear >= (current year - 5).
//
// 🐨 Create `memberNamesSorted`: member names in alphabetical ascending order.
//
// 🐨 Use reduce to calculate the average published year (a number is fine;
// round only if you want a nicer log message).
//
// 🐨 Use reduce to build a `booksByAuthor` object (author → array of books).
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
// 🐨 Use Object.fromEntries to turn that list back into an object keyed by id.
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
// 🐨 Create `findBooksByTags(books, tags)` that returns books matching ALL tags.
//
// 🐨 Create `getMostPopularTag(books)` that returns the tag used most
// (if there's a tie, any of the tied tags is fine).
//
// 🐨 Build a "book recommendations" list for a member based on their
// favoriteGenres (your matching rule — document it in a comment).
