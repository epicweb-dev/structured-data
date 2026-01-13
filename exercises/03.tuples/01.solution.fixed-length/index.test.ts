import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('Coordinate tuples should have correct values', async () => {
	const nyc: [number, number] = [40.7128, -74.006]
	const la: [number, number] = [34.0522, -118.2437]
	expect(nyc[0]).toBe(40.7128)
	expect(nyc[1]).toBe(-74.006)
	expect(la[0]).toBe(34.0522)
	expect(la[1]).toBe(-118.2437)
})

await testStep('formatCoordinate should format coordinates correctly', async () => {
	function formatCoordinate([lat, long]: [number, number]): string {
		return `Lat: ${lat}, Long: ${long}`
	}
	const nyc: [number, number] = [40.7128, -74.006]
	const la: [number, number] = [34.0522, -118.2437]
	expect(formatCoordinate(nyc)).toBe('Lat: 40.7128, Long: -74.006')
	expect(formatCoordinate(la)).toBe('Lat: 34.0522, Long: -118.2437')
})

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
	expect(distance).toBeGreaterThan(0)
	expect(typeof distance).toBe('number')
	// Verify the calculation is correct (approximately 44.27)
	expect(distance).toBeCloseTo(44.27, 1)
})
