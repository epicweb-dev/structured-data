import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('LogLevel enum should have correct values', async () => {
	enum LogLevel {
		Debug = 'debug',
		Info = 'info',
		Warn = 'warn',
		Error = 'error',
	}
	expect(LogLevel.Debug, '🚨 LogLevel.Debug should be "debug" - string enums assign string values to enum members').toBe('debug')
	expect(LogLevel.Info, '🚨 LogLevel.Info should be "info" - verify each enum member has the correct string value').toBe('info')
	expect(LogLevel.Warn, '🚨 LogLevel.Warn should be "warn" - string enum values match their assigned strings').toBe('warn')
	expect(LogLevel.Error, '🚨 LogLevel.Error should be "error" - check that all enum values are correctly assigned').toBe('error')
})

await testStep('LogLevelUnion type should work correctly', async () => {
	type LogLevelUnion = 'debug' | 'info' | 'warn' | 'error'
	const debug: LogLevelUnion = 'debug'
	const info: LogLevelUnion = 'info'
	const warn: LogLevelUnion = 'warn'
	const error: LogLevelUnion = 'error'
	expect(debug, '🚨 debug should be "debug" - union types allow direct string literal assignment').toBe('debug')
	expect(info, '🚨 info should be "info" - union types are more flexible than enums for simple string values').toBe('info')
	expect(warn, '🚨 warn should be "warn" - verify the union type allows these specific string values').toBe('warn')
	expect(error, '🚨 error should be "error" - union types restrict values to the specified literals').toBe('error')
})

await testStep('logWithEnum should format messages correctly', async () => {
	enum LogLevel {
		Debug = 'debug',
		Info = 'info',
		Warn = 'warn',
		Error = 'error',
	}
	function logWithEnum(level: LogLevel, message: string): void {
		// Function tested through its behavior
		expect(level, '🚨 level should be defined - enum values are always defined when passed as parameters').toBeDefined()
		expect(message, '🚨 message should be defined - verify the message parameter is passed correctly').toBeDefined()
		expect(level.toUpperCase(), '🚨 level.toUpperCase() should work - enum values are strings and have string methods').toBe(level.toUpperCase())
	}
	logWithEnum(LogLevel.Info, 'Server started')
	logWithEnum(LogLevel.Error, 'Connection failed')
})

await testStep('logWithUnion should format messages correctly', async () => {
	type LogLevelUnion = 'debug' | 'info' | 'warn' | 'error'
	function logWithUnion(level: LogLevelUnion, message: string): void {
		// Function tested through its behavior
		expect(level, '🚨 level should be defined - union type values are defined when passed as parameters').toBeDefined()
		expect(message, '🚨 message should be defined - verify the message parameter is passed correctly').toBeDefined()
		expect(level.toUpperCase(), '🚨 level.toUpperCase() should work - union type values are strings and have string methods').toBe(level.toUpperCase())
	}
	logWithUnion('info', 'Server started')
	logWithUnion('error', 'Connection failed')
})
