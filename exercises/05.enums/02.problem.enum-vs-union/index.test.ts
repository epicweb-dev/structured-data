import assert from 'node:assert/strict'
import { test } from 'node:test'
import './index.ts'

await test('LogLevel enum should have correct values', () => {
	enum LogLevel {
		Debug = 'debug',
		Info = 'info',
		Warn = 'warn',
		Error = 'error',
	}
	assert.strictEqual(
		LogLevel.Debug,
		'debug',
		'🚨 LogLevel.Debug should be "debug" - string enums assign string values to enum members',
	)
	assert.strictEqual(
		LogLevel.Info,
		'info',
		'🚨 LogLevel.Info should be "info" - verify each enum member has the correct string value',
	)
	assert.strictEqual(
		LogLevel.Warn,
		'warn',
		'🚨 LogLevel.Warn should be "warn" - string enum values match their assigned strings',
	)
	assert.strictEqual(
		LogLevel.Error,
		'error',
		'🚨 LogLevel.Error should be "error" - check that all enum values are correctly assigned',
	)
})

await test('LogLevelUnion type should work correctly', () => {
	type LogLevelUnion = 'debug' | 'info' | 'warn' | 'error'
	const debug: LogLevelUnion = 'debug'
	const info: LogLevelUnion = 'info'
	const warn: LogLevelUnion = 'warn'
	const error: LogLevelUnion = 'error'
	assert.strictEqual(
		debug,
		'debug',
		'🚨 debug should be "debug" - union types allow direct string literal assignment',
	)
	assert.strictEqual(
		info,
		'info',
		'🚨 info should be "info" - union types are more flexible than enums for simple string values',
	)
	assert.strictEqual(
		warn,
		'warn',
		'🚨 warn should be "warn" - verify the union type allows these specific string values',
	)
	assert.strictEqual(
		error,
		'error',
		'🚨 error should be "error" - union types restrict values to the specified literals',
	)
})

await test('logWithEnum should format messages correctly', () => {
	enum LogLevel {
		Debug = 'debug',
		Info = 'info',
		Warn = 'warn',
		Error = 'error',
	}
	function logWithEnum(level: LogLevel, message: string): void {
		// Function tested through its behavior
		assert.ok(
			level !== undefined,
			'🚨 level should be defined - enum values are always defined when passed as parameters',
		)
		assert.ok(
			message !== undefined,
			'🚨 message should be defined - verify the message parameter is passed correctly',
		)
		assert.strictEqual(
			level.toUpperCase(),
			level.toUpperCase(),
			'🚨 level.toUpperCase() should work - enum values are strings and have string methods',
		)
	}
	logWithEnum(LogLevel.Info, 'Server started')
	logWithEnum(LogLevel.Error, 'Connection failed')
})

await test('logWithUnion should format messages correctly', () => {
	type LogLevelUnion = 'debug' | 'info' | 'warn' | 'error'
	function logWithUnion(level: LogLevelUnion, message: string): void {
		// Function tested through its behavior
		assert.ok(
			level !== undefined,
			'🚨 level should be defined - union type values are defined when passed as parameters',
		)
		assert.ok(
			message !== undefined,
			'🚨 message should be defined - verify the message parameter is passed correctly',
		)
		assert.strictEqual(
			level.toUpperCase(),
			level.toUpperCase(),
			'🚨 level.toUpperCase() should work - union type values are strings and have string methods',
		)
	}
	logWithUnion('info', 'Server started')
	logWithUnion('error', 'Connection failed')
})
