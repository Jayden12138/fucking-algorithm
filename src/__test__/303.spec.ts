import { NumArray } from '@/303.区域和检索-数组不可变'
import { it, expect, describe } from 'bun:test'

describe('303.区域和检索-数组不可变', () => {
	it('NumArray: [-2, 0, 3, -5, 2, -1]', () => {
		let obj = new NumArray([-2, 0, 3, -5, 2, -1])
		expect(obj.sumRange(0, 2)).toBe(1)
		expect(obj.sumRange(2, 5)).toBe(-1)
		expect(obj.sumRange(0, 5)).toBe(-3)
	})
})
