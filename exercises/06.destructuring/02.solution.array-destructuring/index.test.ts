import { testStep, expect } from '@epic-web/workshop-utils/test'
import {
	highest,
	secondHighest,
	winner,
	others,
	x,
	y,
	z,
	min,
	max,
	getMinMax,
} from './index.ts'

await testStep('highest and secondHighest should be destructured', async () => {
	expect(
		highest,
		'🚨 highest should be 95 - destructure first element from scores',
	).toBe(95)
	expect(
		secondHighest,
		'🚨 secondHighest should be 87 - destructure second element from scores',
	).toBe(87)
})

await testStep('winner and others should use rest pattern', async () => {
	expect(
		winner,
		'🚨 winner should be 95 - use const [winner, ...others] = scores',
	).toBe(95)
	expect(
		JSON.stringify(others),
		'🚨 others should be [87, 76, 92, 88] - use rest pattern',
	).toBe(JSON.stringify([87, 76, 92, 88]))
})

await testStep('coordinates should be destructured into x, y, z', async () => {
	expect(x, '🚨 x should be 10 - destructure from coordinates').toBe(10)
	expect(y, '🚨 y should be 20 - destructure from coordinates').toBe(20)
	expect(z, '🚨 z should be 30 - destructure from coordinates').toBe(30)
})

await testStep(
	'getMinMax should return tuple and be destructured',
	async () => {
		expect(min, '🚨 min should be 76 - destructure getMinMax result').toBe(76)
		expect(max, '🚨 max should be 95 - destructure getMinMax result').toBe(95)

		const [testMin, testMax] = getMinMax([5, 2, 8, 1, 9])
		expect(testMin, '🚨 getMinMax([5,2,8,1,9]) should return min 1').toBe(1)
		expect(testMax, '🚨 getMinMax([5,2,8,1,9]) should return max 9').toBe(9)
	},
)
