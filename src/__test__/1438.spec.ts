import { longestSubarray } from '@/1438.绝对差不超过限制的最长连续子数组'
import { it, expect, describe } from 'bun:test'

describe('1438.绝对差不超过限制的最长连续子数组', () => {
	it('longestSubarray: [8,2,4,7], 4', () => {
		expect(longestSubarray([8, 2, 4, 7], 4)).toBe(2)
	})

	it('longestSubarray: [10,1,2,4,7,2], 5', () => {
		expect(longestSubarray([10, 1, 2, 4, 7, 2], 5)).toBe(4)
	})

	it('longestSubarray: [4,2,2,2,4,4,2,2], 0', () => {
		expect(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0)).toBe(3)
	})
})
