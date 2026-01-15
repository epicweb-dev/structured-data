import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('Coordinate tuples should have correct values', () => {
	const nyc: [number, number] = [40.7128, -74.006]
	const la: [number, number] = [34.0522, -118.2437]
	assert.strictEqual(
		nyc[0],
		40.7128,
		'🚨 nyc[0] should be 40.7128 - tuples are accessed by index, [0] is the first element (latitude)',
	)
	assert.strictEqual(
		nyc[1],
		-74.006,
		'🚨 nyc[1] should be -74.006 - tuples are accessed by index, [1] is the second element (longitude)',
	)
	assert.strictEqual(
		la[0],
		34.0522,
		'🚨 la[0] should be 34.0522 - access the first element of the tuple (latitude)',
	)
	assert.strictEqual(
		la[1],
		-118.2437,
		'🚨 la[1] should be -118.2437 - access the second element of the tuple (longitude)',
	)
})

await test('formatCoordinate should format coordinates correctly', () => {
	function formatCoordinate([lat, long]: [number, number]): string {
		return `Lat: ${lat}, Long: ${long}`
	}
	const nyc: [number, number] = [40.7128, -74.006]
	const la: [number, number] = [34.0522, -118.2437]
	assert.strictEqual(
		formatCoordinate(nyc),
		'Lat: 40.7128, Long: -74.006',
		'🚨 formatCoordinate should return "Lat: 40.7128, Long: -74.006" - destructure the tuple to access lat and long values',
	)
	assert.strictEqual(
		formatCoordinate(la),
		'Lat: 34.0522, Long: -118.2437',
		'🚨 formatCoordinate should return "Lat: 34.0522, Long: -118.2437" - use destructuring to access tuple elements',
	)
})

await test('getDistance should calculate distance correctly', () => {
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
	assert.ok(
		distance > 0,
		'🚨 distance should be greater than 0 - make sure your calculation returns a positive number',
	)
	assert.strictEqual(
		typeof distance,
		'number',
		'🚨 distance should be a number - verify your function returns a number type',
	)
	// Verify the calculation is correct (approximately 44.74)
	assert.ok(
		Math.abs(distance - 44.74) < 1,
		'🚨 distance should be approximately 44.74 - calculate using the distance formula: sqrt((lat2-lat1)² + (long2-long1)²)',
	)
})
