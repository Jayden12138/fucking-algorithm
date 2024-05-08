import { longestWPI } from '@/1124.表现良好的最长时间段'
import { it, expect, describe } from 'bun:test'

describe('1124.表现良好的最长时间段', () => {
	it('longestWPI: [9,9,6,0,6,6,9]', () => {
		expect(longestWPI([9, 9, 6, 0, 6, 6, 9])).toBe(3)
	})

	it('longestWPI: [1,2,3]', () => {
		expect(longestWPI([1, 2, 3])).toBe(0)
	})

	it('Wrong answer [6,6,9]', () => {
		expect(longestWPI([6, 6, 9])).toBe(1)
	})
})
