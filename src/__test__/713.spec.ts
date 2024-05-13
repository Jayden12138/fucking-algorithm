import { numSubarrayProductLessThanK } from '@/713.乘积小于-k-的子数组'
import { describe, expect, it } from 'bun:test'

describe('713.乘积小于k的子数组', () => {
	it('numSubarrayProductLessThanK: [10,5,2,6], 100', () => {
		expect(numSubarrayProductLessThanK([10, 5, 2, 6], 100)).toBe(8)
	})
})
