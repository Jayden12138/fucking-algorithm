import { pivotIndex } from '@/724.寻找数组的中心下标'
import { it, expect, describe } from 'bun:test'

describe('724.寻找数组的中心下标', () => {
	it('pivotIndex: [1, 7, 3, 6, 5, 6]', () => {
		expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3)
	})

	it('prvotIndex: [2,1,-1]', () => {
		expect(pivotIndex([2, 1, -1])).toBe(0)
	})

	it('prvotIndex: [-1,-1,0,0,-1,-1]', () => {
		expect(pivotIndex([-1, -1, 0, 0, -1, -1])).toBe(2)
	})
})
