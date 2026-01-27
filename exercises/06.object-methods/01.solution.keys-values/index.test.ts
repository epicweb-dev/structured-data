import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('itemNames is exported', () => {
	assert.ok(
		'itemNames' in solution,
		'🚨 Make sure you export "itemNames"',
	)
})

await test('quantities is exported', () => {
	assert.ok(
		'quantities' in solution,
		'🚨 Make sure you export "quantities"',
	)
})

await test('totalQuantity is exported', () => {
	assert.ok(
		'totalQuantity' in solution,
		'🚨 Make sure you export "totalQuantity"',
	)
})

await test('itemNames uses Object.keys order', () => {
	assert.deepStrictEqual(
		solution.itemNames,
		['apples', 'oranges', 'bananas', 'mangoes'],
		'🚨 itemNames should list the inventory keys in order',
	)
})

await test('quantities uses Object.values order', () => {
	assert.deepStrictEqual(
		solution.quantities,
		[12, 8, 0, 4],
		'🚨 quantities should list the inventory values in order',
	)
})

await test('totalQuantity sums all values', () => {
	assert.strictEqual(
		solution.totalQuantity,
		24,
		'🚨 totalQuantity should sum all quantities',
	)
})
