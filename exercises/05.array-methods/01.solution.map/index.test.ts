import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('names is exported', () => {
	assert.ok(
		'names' in solution,
		'🚨 Make sure you export "names" - add: export { names, ... }',
	)
})

await test('prices is exported', () => {
	assert.ok(
		'prices' in solution,
		'🚨 Make sure you export "prices" - add: export { prices, ... }',
	)
})

await test('summary is exported', () => {
	assert.ok(
		'summary' in solution,
		'🚨 Make sure you export "summary" - add: export { summary, ... }',
	)
})

await test('Map should extract product names correctly', () => {
	assert.deepStrictEqual(
		solution.names,
		['Laptop', 'Coffee Maker', 'Headphones', 'Blender'],
		'🚨 names should be ["Laptop", "Coffee Maker", "Headphones", "Blender"] - use map() to extract the name property from each product',
	)
	assert.strictEqual(
		solution.names.length,
		4,
		'🚨 names.length should be 4 - map() returns an array with the same length as the original',
	)
})

await test('Map should format prices correctly', () => {
	assert.deepStrictEqual(
		solution.prices,
		['$999.99', '$79.99', '$149.99', '$49.99'],
		'🚨 prices should be ["$999.99", "$79.99", "$149.99", "$49.99"] - use map() to format each price with a dollar sign and toFixed(2)',
	)
})

await test('Map should create summary objects correctly', () => {
	assert.deepStrictEqual(
		solution.summary,
		[
			{ name: 'Laptop', priceLabel: '$999.99' },
			{ name: 'Coffee Maker', priceLabel: '$79.99' },
			{ name: 'Headphones', priceLabel: '$149.99' },
			{ name: 'Blender', priceLabel: '$49.99' },
		],
		'🚨 summary should contain objects with name and priceLabel - use map() to transform each product into a new object shape',
	)
})
