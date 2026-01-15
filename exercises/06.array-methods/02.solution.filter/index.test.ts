import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { electronics, affordable, available, inStockElectronicsUnder500 } =
	JSON.parse(jsonLine.replace('Results:', '').trim())

await test('Filter should filter electronics correctly', () => {
	assert.strictEqual(
		electronics.length,
		3,
		'🚨 electronics.length should be 3 - use filter() to keep only products where category === "Electronics"',
	)
	assert.deepStrictEqual(
		electronics,
		['Laptop', 'Headphones', 'Monitor'],
		'🚨 electronics should contain ["Laptop", "Headphones", "Monitor"] - filter products by category property',
	)
})

await test('Filter should filter affordable products correctly', () => {
	assert.strictEqual(
		affordable.length,
		2,
		'🚨 affordable.length should be 2 - use filter() to keep only products where price < 100',
	)
	assert.deepStrictEqual(
		affordable,
		['Coffee Maker', 'Blender'],
		'🚨 affordable should contain ["Coffee Maker", "Blender"] - filter products by price comparison',
	)
})

await test('Filter should filter in-stock products correctly', () => {
	assert.strictEqual(
		available.length,
		4,
		'🚨 available.length should be 4 - use filter() to keep only products where inStock === true',
	)
	assert.strictEqual(
		available.length > 0,
		true,
		'🚨 All available products should have inStock === true - verify your filter condition checks the inStock property',
	)
})

await test('Chained filters should work correctly', () => {
	assert.deepStrictEqual(
		inStockElectronicsUnder500,
		['Monitor'],
		'🚨 inStockElectronicsUnder500 should be ["Monitor"] - chain multiple filters: inStock, then category === "Electronics", then price < 500',
	)
})
