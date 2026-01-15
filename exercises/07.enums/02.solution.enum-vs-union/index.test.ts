import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { test } from 'node:test'

const output = execSync('npm start --silent', { encoding: 'utf8' })
const jsonLine = output.split('\n').find((line) => line.startsWith('Results:'))
assert.ok(jsonLine, '🚨 Missing "Results:" output line')
const { logLevel, unionValues, messages } = JSON.parse(
	jsonLine.replace('Results:', '').trim(),
)

await test('LogLevel enum should have correct values', () => {
	assert.strictEqual(
		logLevel.Debug,
		'debug',
		'🚨 LogLevel.Debug should be "debug" - string enums assign string values to enum members',
	)
	assert.strictEqual(
		logLevel.Info,
		'info',
		'🚨 LogLevel.Info should be "info" - verify each enum member has the correct string value',
	)
	assert.strictEqual(
		logLevel.Warn,
		'warn',
		'🚨 LogLevel.Warn should be "warn" - string enum values match their assigned strings',
	)
	assert.strictEqual(
		logLevel.Error,
		'error',
		'🚨 LogLevel.Error should be "error" - check that all enum values are correctly assigned',
	)
})

await test('LogLevelUnion type should work correctly', () => {
	const debug = unionValues[0]
	const info = unionValues[1]
	const warn = unionValues[2]
	const error = unionValues[3]
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
	assert.strictEqual(messages[0], '[INFO] Server started')
})

await test('logWithUnion should format messages correctly', () => {
	assert.strictEqual(messages[1], '[ERROR] Connection failed')
})
