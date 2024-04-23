import { findKthLargest } from '@/215.数组中的第k个最大元素'
import { describe, expect, it } from 'bun:test'

describe('215.数组中的第k个最大元素', () => {
	it('findKthLargest: [3,2,1,5,6,4], k = 2', () => {
		expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5)
	})

	it('findKthLargest: [3,2,3,1,2,4,5,5,6], k = 4', () => {
		expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4)
	})
})
