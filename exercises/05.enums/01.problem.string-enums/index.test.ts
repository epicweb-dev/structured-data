import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('OrderStatus enum should have correct values', () => {
	enum OrderStatus {
		Pending = 'pending',
		Processing = 'processing',
		Shipped = 'shipped',
		Delivered = 'delivered',
	}
	assert.strictEqual(
		OrderStatus.Pending,
		'pending',
		'🚨 OrderStatus.Pending should be "pending" - string enums use the assigned string value',
	)
	assert.strictEqual(
		OrderStatus.Processing,
		'processing',
		'🚨 OrderStatus.Processing should be "processing" - verify each enum member has the correct string value',
	)
	assert.strictEqual(
		OrderStatus.Shipped,
		'shipped',
		'🚨 OrderStatus.Shipped should be "shipped" - string enum values match their assigned strings',
	)
	assert.strictEqual(
		OrderStatus.Delivered,
		'delivered',
		'🚨 OrderStatus.Delivered should be "delivered" - check that all enum values are correctly assigned',
	)
})

await test('Order object should use OrderStatus enum correctly', () => {
	enum OrderStatus {
		Pending = 'pending',
		Processing = 'processing',
		Shipped = 'shipped',
		Delivered = 'delivered',
	}
	const order = {
		id: 'ORD-001',
		status: OrderStatus.Pending,
		customerName: 'Alice Johnson',
	}
	assert.strictEqual(
		order.status,
		OrderStatus.Pending,
		'🚨 order.status should be OrderStatus.Pending - use the enum value when assigning to the status property',
	)
	assert.strictEqual(
		order.status,
		'pending',
		'🚨 order.status should be "pending" - string enum values can be compared directly to strings',
	)
})

await test('getStatusMessage should return correct messages', () => {
	enum OrderStatus {
		Pending = 'pending',
		Processing = 'processing',
		Shipped = 'shipped',
		Delivered = 'delivered',
	}
	function getStatusMessage(status: OrderStatus): string {
		switch (status) {
			case OrderStatus.Pending:
				return 'Your order is pending confirmation'
			case OrderStatus.Processing:
				return 'Your order is being processed'
			case OrderStatus.Shipped:
				return 'Your order has been shipped!'
			case OrderStatus.Delivered:
				return 'Your order has been delivered'
		}
	}
	assert.strictEqual(
		getStatusMessage(OrderStatus.Pending),
		'Your order is pending confirmation',
		'🚨 getStatusMessage(OrderStatus.Pending) should return the correct message - use a switch statement to handle each enum case',
	)
	assert.strictEqual(
		getStatusMessage(OrderStatus.Processing),
		'Your order is being processed',
		'🚨 getStatusMessage(OrderStatus.Processing) should return the correct message - handle the Processing case in your switch',
	)
	assert.strictEqual(
		getStatusMessage(OrderStatus.Shipped),
		'Your order has been shipped!',
		'🚨 getStatusMessage(OrderStatus.Shipped) should return the correct message - handle the Shipped case in your switch',
	)
	assert.strictEqual(
		getStatusMessage(OrderStatus.Delivered),
		'Your order has been delivered',
		'🚨 getStatusMessage(OrderStatus.Delivered) should return the correct message - handle the Delivered case in your switch',
	)
})
