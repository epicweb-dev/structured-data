import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('entries are exported', () => {
	assert.ok(
		'entries' in solution,
		'🚨 Make sure you export "entries"',
	)
})

await test('discountedEntries are exported', () => {
	assert.ok(
		'discountedEntries' in solution,
		'🚨 Make sure you export "discountedEntries"',
	)
})

await test('discountedPrices are exported', () => {
	assert.ok(
		'discountedPrices' in solution,
		'🚨 Make sure you export "discountedPrices"',
	)
})

await test('entries should contain sku/price pairs', () => {
	assert.deepStrictEqual(
		solution.entries,
		[
			['sku-1', 1299],
			['sku-2', 499],
			['sku-3', 2500],
		],
		'🚨 entries should match Object.entries(priceBySku)',
	)
})

await test('discountedPrices should apply 10% discount', () => {
	assert.deepStrictEqual(
		solution.discountedPrices,
		{
			'sku-1': 1169,
			'sku-2': 449,
			'sku-3': 2250,
		},
		'🚨 discountedPrices should contain 10% off values',
	)
})
