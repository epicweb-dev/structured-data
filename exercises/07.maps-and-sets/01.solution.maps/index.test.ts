import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('usersById is exported', () => {
	assert.ok(
		'usersById' in solution,
		'🚨 Make sure you export "usersById"',
	)
})

await test('adminUser is exported', () => {
	assert.ok(
		'adminUser' in solution,
		'🚨 Make sure you export "adminUser"',
	)
})

await test('hasMissingUser is exported', () => {
	assert.ok(
		'hasMissingUser' in solution,
		'🚨 Make sure you export "hasMissingUser"',
	)
})

await test('usersById should be a Map with 3 entries', () => {
	assert.ok(
		solution.usersById instanceof Map,
		'🚨 usersById should be a Map',
	)
	assert.strictEqual(
		solution.usersById.size,
		3,
		'🚨 usersById should contain all users',
	)
})

await test('adminUser should come from the map', () => {
	assert.strictEqual(
		solution.adminUser?.name,
		'Ava',
		'🚨 adminUser should be the user with id "u1"',
	)
})

await test('hasMissingUser should be false for u99', () => {
	assert.strictEqual(
		solution.hasMissingUser,
		false,
		'🚨 hasMissingUser should be false for id "u99"',
	)
})
