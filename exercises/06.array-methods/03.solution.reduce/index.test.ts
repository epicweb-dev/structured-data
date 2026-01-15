import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { total, mostExpensive, countByCategory } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('Reduce should calculate total price correctly', () => {
	assert.strictEqual(
		total,
		1579.95,
		'🚨 total should be 1579.95 - use reduce() to sum all product prices, starting with initial value 0',
	)
})

await test('Reduce should find most expensive product correctly', () => {
	assert.strictEqual(
		mostExpensive.name,
		'Laptop',
		'🚨 mostExpensive.name should be "Laptop" - use reduce() to find the product with the highest price',
	)
	assert.strictEqual(
		mostExpensive.price,
		999.99,
		'🚨 mostExpensive.price should be 999.99 - compare prices in the reduce accumulator to find the maximum',
	)
})

await test('Reduce should count products by category correctly', () => {
	assert.strictEqual(
		countByCategory['Electronics'],
		3,
		'🚨 countByCategory["Electronics"] should be 3 - use reduce() to count products by category, incrementing the count for each category',
	)
	assert.strictEqual(
		countByCategory['Kitchen'],
		2,
		'🚨 countByCategory["Kitchen"] should be 2 - accumulate counts in an object using reduce()',
	)
})
