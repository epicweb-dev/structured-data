import { testStep, expect } from '@epic-web/workshop-utils/test'
import { multiply, createArray, mergeArrays } from './index.ts'

await testStep('multiply should use rest parameters', async () => {
	expect(multiply(2, 3, 4), '🚨 multiply(2, 3, 4) should return 24').toBe(24)
	expect(multiply(5), '🚨 multiply(5) should return 5').toBe(5)
	expect(multiply(), '🚨 multiply() with no args should return 1').toBe(1)
	expect(multiply(2, 2, 2, 2), '🚨 multiply(2, 2, 2, 2) should return 16').toBe(
		16,
	)
})

await testStep('createArray should collect items via rest', async () => {
	expect(
		JSON.stringify(createArray(1, 2, 3)),
		'🚨 createArray(1, 2, 3) should return [1, 2, 3]',
	).toBe(JSON.stringify([1, 2, 3]))
	expect(
		JSON.stringify(createArray('a', 'b')),
		'🚨 createArray("a", "b") should return ["a", "b"]',
	).toBe(JSON.stringify(['a', 'b']))
	expect(
		JSON.stringify(createArray()),
		'🚨 createArray() should return []',
	).toBe(JSON.stringify([]))
})

await testStep('mergeArrays should merge multiple arrays', async () => {
	expect(
		JSON.stringify(mergeArrays([1, 2], [3, 4], [5])),
		'🚨 mergeArrays([1, 2], [3, 4], [5]) should return [1, 2, 3, 4, 5]',
	).toBe(JSON.stringify([1, 2, 3, 4, 5]))
	expect(
		JSON.stringify(mergeArrays(['a'], ['b', 'c'])),
		'🚨 mergeArrays(["a"], ["b", "c"]) should return ["a", "b", "c"]',
	).toBe(JSON.stringify(['a', 'b', 'c']))
	expect(
		JSON.stringify(mergeArrays()),
		'🚨 mergeArrays() should return []',
	).toBe(JSON.stringify([]))
})
