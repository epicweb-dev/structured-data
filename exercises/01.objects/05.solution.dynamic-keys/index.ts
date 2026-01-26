// Page Views
// Working with dynamic object keys

type PageViews = { [page: string]: number }

const pageViews: PageViews = {}

const homePage = 'home'
const aboutPage = 'about'

pageViews[homePage] = 100
pageViews[aboutPage] = 42

function recordView(views: { [page: string]: number }, page: string): void {
	const current = views[page] ?? 0
	views[page] = current + 1
}

recordView(pageViews, 'home')
recordView(pageViews, 'contact')

export { pageViews, recordView }
