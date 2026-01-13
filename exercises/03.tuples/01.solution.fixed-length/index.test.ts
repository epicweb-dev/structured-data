import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('Coordinate tuples should have correct values', async () => {
	const nyc: [number, number] = [40.7128, -74.006]
	const la: [number, number] = [34.0522, -118.2437]
	expect(
		nyc[0],
		'🚨 nyc[0] should be 40.7128 - tuples are accessed by index, [0] is the first element (latitude)',
	).toBe(40.7128)
	expect(
		nyc[1],
		'🚨 nyc[1] should be -74.006 - tuples are accessed by index, [1] is the second element (longitude)',
	).toBe(-74.006)
	expect(
		la[0],
		'🚨 la[0] should be 34.0522 - access the first element of the tuple (latitude)',
	).toBe(34.0522)
	expect(
		la[1],
		'🚨 la[1] should be -118.2437 - access the second element of the tuple (longitude)',
	).toBe(-118.2437)
})

await testStep(
	'formatCoordinate should format coordinates correctly',
	async () => {
		function formatCoordinate([lat, long]: [number, number]): string {
			return `Lat: ${lat}, Long: ${long}`
		}
		const nyc: [number, number] = [40.7128, -74.006]
		const la: [number, number] = [34.0522, -118.2437]
		expect(
			formatCoordinate(nyc),
			'🚨 formatCoordinate should return "Lat: 40.7128, Long: -74.006" - destructure the tuple to access lat and long values',
		).toBe('Lat: 40.7128, Long: -74.006')
		expect(
			formatCoordinate(la),
			'🚨 formatCoordinate should return "Lat: 34.0522, Long: -118.2437" - use destructuring to access tuple elements',
		).toBe('Lat: 34.0522, Long: -118.2437')
	},
)

await testStep('getDistance should calculate distance correctly', async () => {
	function getDistance(
		[lat1, long1]: [number, number],
		[lat2, long2]: [number, number],
	): number {
		const latDiff = lat2 - lat1
		const longDiff = long2 - long1
		return Math.sqrt(Math.pow(latDiff, 2) + Math.pow(longDiff, 2))
	}
	const nyc: [number, number] = [40.7128, -74.006]
	const la: [number, number] = [34.0522, -118.2437]
	const distance = getDistance(nyc, la)
	expect(
		distance,
		'🚨 distance should be greater than 0 - make sure your calculation returns a positive number',
	).toBeGreaterThan(0)
	expect(
		typeof distance,
		'🚨 distance should be a number - verify your function returns a number type',
	).toBe('number')
	// Verify the calculation is correct (approximately 44.74)
	expect(
		distance,
		'🚨 distance should be approximately 44.74 - calculate using the distance formula: sqrt((lat2-lat1)² + (long2-long1)²)',
	).toBeCloseTo(44.74, 1)
})
