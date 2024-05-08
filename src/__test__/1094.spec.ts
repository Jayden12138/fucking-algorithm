import { carPooling } from '@/1094.拼车'
import { it, expect, describe } from 'bun:test'

describe('1094.拼车', () => {
	it('carPooling: [[2,1,5],[3,3,7]], 4', () => {
		expect(
			carPooling(
				[
					[2, 1, 5],
					[3, 3, 7],
				],
				4
			)
		).toBe(false)
	})
	it('carPooling: [[2,1,5],[3,5,7]], 5', () => {
		expect(
			carPooling(
				[
					[2, 1, 5],
					[3, 5, 7],
				],
				5
			)
		).toBe(true)
	})

	it('Wrong Answer 42/59: [[2,1,5],[3,5,7]], 3', () => {
		expect(
			carPooling(
				[
					[2, 1, 5],
					[3, 5, 7],
				],
				3
			)
		).toBe(true)
	})
})
