// Comparing Enums and Union Types
// Same problem, different solutions

// 🐨 Create an enum for LogLevel
// enum LogLevel { Debug = 'debug', Info = 'info', Warn = 'warn', Error = 'error' }

// 🐨 Create a function using the enum
// function logWithEnum(level: LogLevel, message: string): void

// 🐨 Create the same function using inline union types (no type alias needed!)
// function logWithUnion(level: 'debug' | 'info' | 'warn' | 'error', message: string): void

// Compare usage:
// logWithEnum(LogLevel.Info, 'Server started')
// logWithUnion('info', 'Server started')

// Which do you prefer?

// 🐨 When you're done, uncomment this:
// console.log(
// 	'Results JSON:',
// 	JSON.stringify({
// 		logLevel: {
// 			Debug: LogLevel.Debug,
// 			Info: LogLevel.Info,
// 			Warn: LogLevel.Warn,
// 			Error: LogLevel.Error,
// 		},
// 		unionValues: ['debug', 'info', 'warn', 'error'],
// 		messages: [
// 			'[INFO] Server started',
// 			'[ERROR] Connection failed',
// 		],
// 	}),
// )
