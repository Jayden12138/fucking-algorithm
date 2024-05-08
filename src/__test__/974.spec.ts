import { subarraysDivByK } from '@/974.和可被-k-整除的子数组'
import { it, expect, describe } from 'bun:test'

describe('974.和可被 k 整除的子数组', () => {
	it('subarraysDivByK: [4,5,0,-2,-3,1], k = 5', () => {
		expect(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)).toBe(7)
	})

	it('subarraysDivByK: [5], k = 9', () => {
		expect(subarraysDivByK([5], 9)).toBe(0)
	})

	it('Wrong Answer 46/73: [-1,2,9], 2', () => {
		expect(subarraysDivByK([-1, 2, 9], 2)).toBe(2)
	})
})
