import { minSubArrayLen } from '@/209.长度最小的子数组'
import { describe, expect, it } from 'bun:test'

describe('209.长度最小的子数组', () => {
	it('minSubArrayLen: [2,3,1,2,4,3], 7', () => {
		expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2)
	})

	it('Wrong Answer 12/21: 11, [1,2,3,4,5]', () => {
		expect(minSubArrayLen(11, [1, 2, 3, 4, 5])).toBe(3)
	})
})
