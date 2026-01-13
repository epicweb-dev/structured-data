import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('OrderStatus enum should have correct values', async () => {
	enum OrderStatus {
		Pending = 'pending',
		Processing = 'processing',
		Shipped = 'shipped',
		Delivered = 'delivered',
	}
	expect(OrderStatus.Pending, '🚨 OrderStatus.Pending should be "pending" - string enums use the assigned string value').toBe('pending')
	expect(OrderStatus.Processing, '🚨 OrderStatus.Processing should be "processing" - verify each enum member has the correct string value').toBe('processing')
	expect(OrderStatus.Shipped, '🚨 OrderStatus.Shipped should be "shipped" - string enum values match their assigned strings').toBe('shipped')
	expect(OrderStatus.Delivered, '🚨 OrderStatus.Delivered should be "delivered" - check that all enum values are correctly assigned').toBe('delivered')
})

await testStep('Order object should use OrderStatus enum correctly', async () => {
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
	expect(order.status, '🚨 order.status should be OrderStatus.Pending - use the enum value when assigning to the status property').toBe(OrderStatus.Pending)
	expect(order.status, '🚨 order.status should be "pending" - string enum values can be compared directly to strings').toBe('pending')
})

await testStep('getStatusMessage should return correct messages', async () => {
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
	expect(getStatusMessage(OrderStatus.Pending), '🚨 getStatusMessage(OrderStatus.Pending) should return the correct message - use a switch statement to handle each enum case').toBe('Your order is pending confirmation')
	expect(getStatusMessage(OrderStatus.Processing), '🚨 getStatusMessage(OrderStatus.Processing) should return the correct message - handle the Processing case in your switch').toBe('Your order is being processed')
	expect(getStatusMessage(OrderStatus.Shipped), '🚨 getStatusMessage(OrderStatus.Shipped) should return the correct message - handle the Shipped case in your switch').toBe('Your order has been shipped!')
	expect(getStatusMessage(OrderStatus.Delivered), '🚨 getStatusMessage(OrderStatus.Delivered) should return the correct message - handle the Delivered case in your switch').toBe('Your order has been delivered')
})
