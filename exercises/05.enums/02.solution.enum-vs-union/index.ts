// Comparing Enums and Union Types
// Same problem, different solutions

// Enum approach
enum LogLevel {
	Debug = 'debug',
	Info = 'info',
	Warn = 'warn',
	Error = 'error',
}

// Union type approach
type LogLevelUnion = 'debug' | 'info' | 'warn' | 'error'

function logWithEnum(level: LogLevel, message: string): void {
	console.log(`[${level.toUpperCase()}] ${message}`)
}

function logWithUnion(level: LogLevelUnion, message: string): void {
	console.log(`[${level.toUpperCase()}] ${message}`)
}

// Using enum - requires importing/referencing the enum
logWithEnum(LogLevel.Info, 'Server started')
logWithEnum(LogLevel.Error, 'Connection failed')

// Using union - just use strings directly
logWithUnion('info', 'Server started')
logWithUnion('error', 'Connection failed')

// Both provide the same type safety:
// logWithEnum(LogLevel.Unknown)  // ❌ Error
// logWithUnion('unknown')         // ❌ Error
