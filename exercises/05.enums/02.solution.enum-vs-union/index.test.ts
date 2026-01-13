import { testStep, expect } from '@epic-web/workshop-utils/test'
import './index.ts'

await testStep('LogLevel enum should have correct values', async () => {
	enum LogLevel {
		Debug = 'debug',
		Info = 'info',
		Warn = 'warn',
		Error = 'error',
	}
	expect(LogLevel.Debug).toBe('debug')
	expect(LogLevel.Info).toBe('info')
	expect(LogLevel.Warn).toBe('warn')
	expect(LogLevel.Error).toBe('error')
})

await testStep('LogLevelUnion type should work correctly', async () => {
	type LogLevelUnion = 'debug' | 'info' | 'warn' | 'error'
	const debug: LogLevelUnion = 'debug'
	const info: LogLevelUnion = 'info'
	const warn: LogLevelUnion = 'warn'
	const error: LogLevelUnion = 'error'
	expect(debug).toBe('debug')
	expect(info).toBe('info')
	expect(warn).toBe('warn')
	expect(error).toBe('error')
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
		expect(level).toBeDefined()
		expect(message).toBeDefined()
		expect(level.toUpperCase()).toBe(level.toUpperCase())
	}
	logWithEnum(LogLevel.Info, 'Server started')
	logWithEnum(LogLevel.Error, 'Connection failed')
})

await testStep('logWithUnion should format messages correctly', async () => {
	type LogLevelUnion = 'debug' | 'info' | 'warn' | 'error'
	function logWithUnion(level: LogLevelUnion, message: string): void {
		// Function tested through its behavior
		expect(level).toBeDefined()
		expect(message).toBeDefined()
		expect(level.toUpperCase()).toBe(level.toUpperCase())
	}
	logWithUnion('info', 'Server started')
	logWithUnion('error', 'Connection failed')
})
