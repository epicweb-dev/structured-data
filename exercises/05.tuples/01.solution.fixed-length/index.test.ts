import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('nyc is exported', () => {
	assert.ok(
		'nyc' in solution,
		'🚨 Make sure you export "nyc" - add: export { nyc, ... }',
	)
})

await test('la is exported', () => {
	assert.ok(
		'la' in solution,
		'🚨 Make sure you export "la" - add: export { la, ... }',
	)
})

await test('formatCoordinate is exported', () => {
	assert.ok(
		'formatCoordinate' in solution,
		'🚨 Make sure you export "formatCoordinate" - add: export { formatCoordinate, ... }',
	)
})

await test('getDistance is exported', () => {
	assert.ok(
		'getDistance' in solution,
		'🚨 Make sure you export "getDistance" - add: export { getDistance, ... }',
	)
})

await test('Coordinate tuples should have correct values', () => {
	assert.strictEqual(
		solution.nyc[0],
		40.7128,
		'🚨 nyc[0] should be 40.7128 - tuples are accessed by index, [0] is the first element (latitude)',
	)
	assert.strictEqual(
		solution.nyc[1],
		-74.006,
		'🚨 nyc[1] should be -74.006 - tuples are accessed by index, [1] is the second element (longitude)',
	)
	assert.strictEqual(
		solution.la[0],
		34.0522,
		'🚨 la[0] should be 34.0522 - access the first element of the tuple (latitude)',
	)
	assert.strictEqual(
		solution.la[1],
		-118.2437,
		'🚨 la[1] should be -118.2437 - access the second element of the tuple (longitude)',
	)
})

await test('formatCoordinate should format coordinates correctly', () => {
	assert.strictEqual(
		solution.formatCoordinate(solution.nyc),
		'Lat: 40.7128, Long: -74.006',
		'🚨 formatCoordinate should return "Lat: 40.7128, Long: -74.006" - destructure the tuple to access lat and long values',
	)
	assert.strictEqual(
		solution.formatCoordinate(solution.la),
		'Lat: 34.0522, Long: -118.2437',
		'🚨 formatCoordinate should return "Lat: 34.0522, Long: -118.2437" - use destructuring to access tuple elements',
	)
})

await test('getDistance should calculate distance correctly', () => {
	const distance = solution.getDistance(solution.nyc, solution.la)
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
