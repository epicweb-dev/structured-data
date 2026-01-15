// Comparing Enums and Union Types
// Same problem, different solutions

// Enum approach
enum LogLevel {
	Debug = 'debug',
	Info = 'info',
	Warn = 'warn',
	Error = 'error',
}

function logWithEnum(level: LogLevel, message: string): void {
	console.log(`[${level.toUpperCase()}] ${message}`)
}

// Union type approach - inline union in function signature
function logWithUnion(
	level: 'debug' | 'info' | 'warn' | 'error',
	message: string,
): void {
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

console.log(
	'Results JSON:',
	JSON.stringify({
		logLevel: {
			Debug: LogLevel.Debug,
			Info: LogLevel.Info,
			Warn: LogLevel.Warn,
			Error: LogLevel.Error,
		},
		unionValues: ['debug', 'info', 'warn', 'error'],
		messages: ['[INFO] Server started', '[ERROR] Connection failed'],
	}),
)
