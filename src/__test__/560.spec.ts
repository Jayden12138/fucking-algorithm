import { subarraySum } from '@/560.和为-k-的子数组'
import { it, expect, describe } from 'bun:test'

describe('560.和为K的子数组', () => {
	it('subarraySum: [1,1,1], 2', () => {
		expect(subarraySum([1, 1, 1], 2)).toBe(2)
	})

	it('subarraySum: [1,2,3], 3', () => {
		expect(subarraySum([1, 2, 3], 3)).toBe(2)
	})

	it('Wrong Answer 58/93: [1], 0', () => {
		expect(subarraySum([1], 0)).toBe(0)
	})

	it('Wrong Answer 60/93: [-1, -1, 1], 0', () => {
		expect(subarraySum([-1, -1, 1], 0)).toBe(1)
	})

	it('Wrong Answer 61/93: [-1, -1, 1], 1', () => {
		expect(subarraySum([-1, -1, 1], 1)).toBe(1)
	})

	it('Wrong Answer 68/93: [1,-1,0], 0', () => {
		expect(subarraySum([1, -1, 0], 0)).toBe(3)
	})
})
