import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('OrderStatus is exported', () => {
	assert.ok(
		'OrderStatus' in solution,
		'🚨 Make sure you export "OrderStatus" - add: export { OrderStatus, ... }',
	)
})

await test('order is exported', () => {
	assert.ok(
		'order' in solution,
		'🚨 Make sure you export "order" - add: export { order, ... }',
	)
})

await test('getStatusMessage is exported', () => {
	assert.ok(
		'getStatusMessage' in solution,
		'🚨 Make sure you export "getStatusMessage" - add: export { getStatusMessage, ... }',
	)
})

await test('OrderStatus enum should have correct values', () => {
	assert.strictEqual(
		solution.OrderStatus.Pending,
		'pending',
		'🚨 OrderStatus.Pending should be "pending" - string enums use the assigned string value',
	)
	assert.strictEqual(
		solution.OrderStatus.Processing,
		'processing',
		'🚨 OrderStatus.Processing should be "processing" - verify each enum member has the correct string value',
	)
	assert.strictEqual(
		solution.OrderStatus.Shipped,
		'shipped',
		'🚨 OrderStatus.Shipped should be "shipped" - string enum values match their assigned strings',
	)
	assert.strictEqual(
		solution.OrderStatus.Delivered,
		'delivered',
		'🚨 OrderStatus.Delivered should be "delivered" - check that all enum values are correctly assigned',
	)
})

await test('Order object should use OrderStatus enum correctly', () => {
	assert.strictEqual(
		solution.order.status,
		solution.OrderStatus.Shipped,
		'🚨 order.status should be OrderStatus.Shipped - use the enum value when assigning to the status property',
	)
	assert.strictEqual(
		solution.order.id,
		'ORD-001',
		'🚨 order.id should be "ORD-001"',
	)
	assert.strictEqual(
		solution.order.customerName,
		'Alice Johnson',
		'🚨 order.customerName should be "Alice Johnson"',
	)
})

await test('getStatusMessage should return correct messages', () => {
	assert.strictEqual(
		solution.getStatusMessage(solution.OrderStatus.Pending),
		'Your order is pending confirmation',
		'🚨 getStatusMessage(OrderStatus.Pending) should return the correct message - use a switch statement to handle each enum case',
	)
	assert.strictEqual(
		solution.getStatusMessage(solution.OrderStatus.Processing),
		'Your order is being processed',
		'🚨 getStatusMessage(OrderStatus.Processing) should return the correct message - handle the Processing case in your switch',
	)
	assert.strictEqual(
		solution.getStatusMessage(solution.OrderStatus.Shipped),
		'Your order has been shipped!',
		'🚨 getStatusMessage(OrderStatus.Shipped) should return the correct message - handle the Shipped case in your switch',
	)
	assert.strictEqual(
		solution.getStatusMessage(solution.OrderStatus.Delivered),
		'Your order has been delivered',
		'🚨 getStatusMessage(OrderStatus.Delivered) should return the correct message - handle the Delivered case in your switch',
	)
})
