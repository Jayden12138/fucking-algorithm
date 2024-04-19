import { corpFlightBookings } from '@/1109.corporate-flight-bookings'
import { describe, expect, it } from 'bun:test'
describe('first', () => {
	it('corpFlightBookings', () => {
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
