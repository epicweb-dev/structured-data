import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { orderStatus, order, messages } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('OrderStatus enum should have correct values', () => {
	assert.strictEqual(
		orderStatus.Pending,
		'pending',
		'🚨 OrderStatus.Pending should be "pending" - string enums use the assigned string value',
	)
	assert.strictEqual(
		orderStatus.Processing,
		'processing',
		'🚨 OrderStatus.Processing should be "processing" - verify each enum member has the correct string value',
	)
	assert.strictEqual(
		orderStatus.Shipped,
		'shipped',
		'🚨 OrderStatus.Shipped should be "shipped" - string enum values match their assigned strings',
	)
	assert.strictEqual(
		orderStatus.Delivered,
		'delivered',
		'🚨 OrderStatus.Delivered should be "delivered" - check that all enum values are correctly assigned',
	)
})

await test('Order object should use OrderStatus enum correctly', () => {
	assert.strictEqual(
		order.initialStatus,
		orderStatus.Pending,
		'🚨 order.status should be OrderStatus.Pending - use the enum value when assigning to the status property',
	)
	assert.strictEqual(
		order.initialStatus,
		'pending',
		'🚨 order.status should be "pending" - string enum values can be compared directly to strings',
	)
})

await test('getStatusMessage should return correct messages', () => {
	assert.strictEqual(
		messages[0],
		'Your order is pending confirmation',
		'🚨 getStatusMessage(OrderStatus.Pending) should return the correct message - use a switch statement to handle each enum case',
	)
	assert.strictEqual(
		messages[1],
		'Your order is being processed',
		'🚨 getStatusMessage(OrderStatus.Processing) should return the correct message - handle the Processing case in your switch',
	)
	assert.strictEqual(
		messages[2],
		'Your order has been shipped!',
		'🚨 getStatusMessage(OrderStatus.Shipped) should return the correct message - handle the Shipped case in your switch',
	)
	assert.strictEqual(
		messages[3],
		'Your order has been delivered',
		'🚨 getStatusMessage(OrderStatus.Delivered) should return the correct message - handle the Delivered case in your switch',
	)
})
