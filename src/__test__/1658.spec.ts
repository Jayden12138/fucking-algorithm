import { minOperations } from '@/1658.将-x-减到-0-的最小操作数'
import { it, expect, describe } from 'bun:test'

describe('1658.将-x-减到-0-的最小操作数', () => {
	it('minOperations: [1,1,4,2,3], 5', () => {
		expect(minOperations([1, 1, 4, 2, 3], 5)).toBe(2)
	})
	it('minOperations: [5,6,7,8,9], 4', () => {
		expect(minOperations([5, 6, 7, 8, 9], 4)).toBe(-1)
	})
	it('minOperations: [3,2,20,1,1,3], 10', () => {
		expect(minOperations([3, 2, 20, 1, 1, 3], 10)).toBe(5)
	})
	it('minOperations: [5,2,3,1,1], 5', () => {
		expect(minOperations([5, 2, 3, 1, 1], 5)).toBe(1)
	})

	it('minOperations: [1,1], 3', () => {
		expect(minOperations([1, 1], 3)).toBe(-1)
	})
})
