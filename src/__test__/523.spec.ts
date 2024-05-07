import { checkSubarraySum } from '@/523.连续的子数组和'
import { it, expect, describe } from 'bun:test'

describe('523.连续的子数组和', () => {
	it('checkSubarraySum: [23,2,4,6,7], 6', () => {
		// [2, 4]
		expect(checkSubarraySum([23, 2, 4, 6, 7], 6)).toBe(true)
	})
	it('checkSubarraySum: [23,2,6,4,7], 6', () => {
		// [23, 2, 6, 4, 7] => 42 => 6n
		expect(checkSubarraySum([23, 2, 6, 4, 7], 6)).toBe(true)
	})

	it('wrong answer 88/99: [23,2,4,6,6] 7', () => {
		expect(checkSubarraySum([23, 2, 4, 6, 6], 7)).toBe(true)
	})

	it('wrong answer 93/99: [0], 1', () => {
		expect(checkSubarraySum([0], 1)).toBe(false)
	})

	it('wrong answer 93/99: [0, 0], 1', () => {
		expect(checkSubarraySum([0, 0], 1)).toBe(true)
	})

	it('wrong answer 93/99: [1, 0], 2', () => {
		expect(checkSubarraySum([1, 0], 2)).toBe(false)
	})
})
