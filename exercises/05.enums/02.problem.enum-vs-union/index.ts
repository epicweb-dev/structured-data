// Comparing Enums and Union Types
// Same problem, different solutions

// 🐨 Create an enum for LogLevel
// enum LogLevel { Debug = 'debug', Info = 'info', Warn = 'warn', Error = 'error' }

// 🐨 Create a union type for the same thing
// type LogLevelUnion = 'debug' | 'info' | 'warn' | 'error'

// 🐨 Create a function using the enum
// function logWithEnum(level: LogLevel, message: string): void

// 🐨 Create the same function using the union type
// function logWithUnion(level: LogLevelUnion, message: string): void

// Compare usage:
// logWithEnum(LogLevel.Info, 'Server started')
// logWithUnion('info', 'Server started')

// Which do you prefer?

export {}
