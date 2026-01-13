// Geographic Coordinates
// Using tuples for fixed-length data

const nyc: [number, number] = [40.7128, -74.006]

const la: [number, number] = [34.0522, -118.2437]

function formatCoordinate([lat, long]: [number, number]): string {
	return `Lat: ${lat}, Long: ${long}`
}

function getDistance(
	[lat1, long1]: [number, number],
	[lat2, long2]: [number, number],
): number {
	const latDiff = lat2 - lat1
	const longDiff = long2 - long1
	return Math.sqrt(Math.pow(latDiff, 2) + Math.pow(longDiff, 2))
}

console.log(formatCoordinate(nyc))
console.log(formatCoordinate(la))
console.log(`Distance: ${getDistance(nyc, la).toFixed(2)}`)

export {}
