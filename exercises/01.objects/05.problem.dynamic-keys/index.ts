// Page Views
// Working with dynamic object keys

// 🐨 Create a `PageViews` type alias with string keys and number values
// 💰 type PageViews = { [page: string]: number }

// 🐨 Create a `pageViews` object using the PageViews type
// 💰 const pageViews: PageViews = {}

// 🐨 Create two variables: `homePage` and `aboutPage`
// Set them to the strings "home" and "about"

// 🐨 Use bracket notation to set view counts:
// pageViews[homePage] = 100
// pageViews[aboutPage] = 42

// 🐨 Create a function `recordView` that takes a page views object
// and a page name, then increments that page's count
// 💰 const current = views[page] ?? 0
// 💰 views[page] = current + 1

// 🐨 Call recordView twice:
// - add one view to "home"
// - add one view to "contact"

// 🐨 Export your variables and functions so we can verify your work
// export { pageViews, recordView }
