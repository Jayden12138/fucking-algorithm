import { longestOnes } from '@/1004.最大连续-1-的个数-iii'
import { it, expect, describe } from 'bun:test'

describe('1004. 最大连续 1 的个数 III', () => {
	it('longestOnes: [1,1,1,0,0,0,1,1,1,1,0], 2', () => {
		expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6)
	})

	it('longestOnes: [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3', () => {
		expect(
			longestOnes(
				[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
				3
			)
		).toBe(10)
	})

	it('longestOnes: [0,0,1,1,1,0,0], 0', () => {
		expect(longestOnes([0, 0, 1, 1, 1, 0, 0], 0)).toBe(3)
	})

	it('longestOnes: [0,0,0,1], 4', () => {
		expect(longestOnes([0, 0, 0, 1], 4)).toBe(4)
	})

	it('longestOnes: [1,1,1,0,0,0,1,1,1,1], 0', () => {
		expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1], 0)).toBe(4)
	})
})
