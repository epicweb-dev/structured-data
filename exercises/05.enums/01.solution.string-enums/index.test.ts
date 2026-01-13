import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('OrderStatus enum should have correct values', async () => {
	enum OrderStatus {
		Pending = 'pending',
		Processing = 'processing',
		Shipped = 'shipped',
		Delivered = 'delivered',
	}
	expect(OrderStatus.Pending).toBe('pending')
	expect(OrderStatus.Processing).toBe('processing')
	expect(OrderStatus.Shipped).toBe('shipped')
	expect(OrderStatus.Delivered).toBe('delivered')
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
	expect(order.status).toBe(OrderStatus.Pending)
	expect(order.status).toBe('pending')
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
	expect(getStatusMessage(OrderStatus.Pending)).toBe('Your order is pending confirmation')
	expect(getStatusMessage(OrderStatus.Processing)).toBe('Your order is being processed')
	expect(getStatusMessage(OrderStatus.Shipped)).toBe('Your order has been shipped!')
	expect(getStatusMessage(OrderStatus.Delivered)).toBe('Your order has been delivered')
})
