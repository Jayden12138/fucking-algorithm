import { corpFlightBookings } from '@/1109.航班预订统计'
import { it, expect, describe } from 'bun:test'

describe('1109.航班预订统计', () => {
	it('corpFlightBookings: [[1,2,10],[2,3,20],[2,5,25]], 5', () => {
		expect(
			corpFlightBookings(
				[
					[1, 2, 10],
					[2, 3, 20],
					[2, 5, 25],
				],
				5
			)
		).toEqual([10, 55, 45, 25, 25])
	})
})
