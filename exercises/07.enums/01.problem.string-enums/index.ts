// Order Management System
// Using string enums for status values

// 🐨 Create an enum `OrderStatus` with values:
// - Pending = 'pending'
// - Processing = 'processing'
// - Shipped = 'shipped'
// - Delivered = 'delivered'

// 🐨 Create an order object with:
// - id: string
// - status: OrderStatus
// - customerName: string

// 🐨 Create a function `getStatusMessage` that takes an OrderStatus
// and returns a user-friendly message

// function getStatusMessage(status: OrderStatus): string {
//   switch (status) {
//     case OrderStatus.Pending: return 'Your order is pending'
//     // Add other cases
//   }
// }

// console.log(order)
// console.log(getStatusMessage(order.status))

// 🐨 When you're done, uncomment this:
// console.log(
// 	'Results JSON:',
// 	JSON.stringify({
// 		orderStatus: {
// 			Pending: OrderStatus.Pending,
// 			Processing: OrderStatus.Processing,
// 			Shipped: OrderStatus.Shipped,
// 			Delivered: OrderStatus.Delivered,
// 		},
// 		order: { id: order.id, status: order.status, customerName: order.customerName },
// 		messages: [
// 			getStatusMessage(OrderStatus.Pending),
// 			getStatusMessage(OrderStatus.Processing),
// 			getStatusMessage(OrderStatus.Shipped),
// 			getStatusMessage(OrderStatus.Delivered),
// 		],
// 	}),
// )
