import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { names, prices, summary } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('Map should extract product names correctly', () => {
	assert.deepStrictEqual(
		names,
		['Laptop', 'Coffee Maker', 'Headphones', 'Blender'],
		'🚨 names should be ["Laptop", "Coffee Maker", "Headphones", "Blender"] - use map() to extract the name property from each product',
	)
	assert.strictEqual(
		names.length,
		4,
		'🚨 names.length should be 4 - map() returns an array with the same length as the original',
	)
})

await test('Map should format prices correctly', () => {
	assert.deepStrictEqual(
		prices,
		['$999.99', '$79.99', '$149.99', '$49.99'],
		'🚨 prices should be ["$999.99", "$79.99", "$149.99", "$49.99"] - use map() to format each price with a dollar sign and toFixed(2)',
	)
})

await test('Map should create summary objects correctly', () => {
	assert.deepStrictEqual(
		summary,
		[
			{ name: 'Laptop', priceLabel: '$999.99' },
			{ name: 'Coffee Maker', priceLabel: '$79.99' },
			{ name: 'Headphones', priceLabel: '$149.99' },
			{ name: 'Blender', priceLabel: '$49.99' },
		],
		'🚨 summary should contain objects with name and priceLabel - use map() to transform each product into a new object shape',
	)
})
