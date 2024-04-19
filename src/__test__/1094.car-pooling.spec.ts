import { carPooling } from '@/1094.car-pooling'
import { describe, expect, it } from 'bun:test'
describe('first', () => {
	it('should be false', () => {
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

	it('should be true', () => {
		expect(
			carPooling(
				[
					[2, 1, 5],
					[3, 3, 7],
				],
				5
			)
		).toBe(true)
	})

	// 报错了
	it('should be true 2', () => {
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
