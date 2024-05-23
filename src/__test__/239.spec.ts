import { maxSlidingWindow } from '@/239.滑动窗口最大值'
import { it, expect, describe } from 'bun:test'

describe('239.滑动窗口最大值', () => {
	it('maxSlidingWindow: [1,3,-1,-3,5,3,6,7], 3', () => {
		expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
			3, 3, 5, 5, 6, 7,
		])
	})

	it('Wrong Answer 23/51: [1,3,1,2,0,5] 3', () => {
		expect(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)).toEqual([3, 3, 2, 5])
	})
})
