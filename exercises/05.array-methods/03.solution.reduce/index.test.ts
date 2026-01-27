import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('total is exported', () => {
	assert.ok(
		'total' in solution,
		'🚨 Make sure you export "total" - add: export { total, ... }',
	)
})

await test('mostExpensive is exported', () => {
	assert.ok(
		'mostExpensive' in solution,
		'🚨 Make sure you export "mostExpensive" - add: export { mostExpensive, ... }',
	)
})

await test('countByCategory is exported', () => {
	assert.ok(
		'countByCategory' in solution,
		'🚨 Make sure you export "countByCategory" - add: export { countByCategory, ... }',
	)
})

await test('Reduce should calculate total price correctly', () => {
	assert.strictEqual(
		solution.total,
		1579.95,
		'🚨 total should be 1579.95 - use reduce() to sum all product prices, starting with initial value 0',
	)
})

await test('Reduce should find most expensive product correctly', () => {
	assert.strictEqual(
		solution.mostExpensive.name,
		'Laptop',
		'🚨 mostExpensive.name should be "Laptop" - use reduce() to find the product with the highest price',
	)
	assert.strictEqual(
		solution.mostExpensive.price,
		999.99,
		'🚨 mostExpensive.price should be 999.99 - compare prices in the reduce accumulator to find the maximum',
	)
})

await test('Reduce should count products by category correctly', () => {
	assert.strictEqual(
		solution.countByCategory['Electronics'],
		3,
		'🚨 countByCategory["Electronics"] should be 3 - use reduce() to count products by category, incrementing the count for each category',
	)
	assert.strictEqual(
		solution.countByCategory['Kitchen'],
		2,
		'🚨 countByCategory["Kitchen"] should be 2 - accumulate counts in an object using reduce()',
	)
})
