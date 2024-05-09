import { spiralOrder } from '@/54.螺旋矩阵'
import { it, expect, describe } from 'bun:test'

describe('54.螺旋矩阵', () => {
	it('spiralOrder: [[1,2,3],[4,5,6],[7,8,9]]', () => {
		expect(
			spiralOrder([
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
			])
		).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
	})

	it('spiralOrder: [[1,2,3,4],[5,6,7,8],[9,10,11,12]]', () => {
		expect(
			spiralOrder([
				[1, 2, 3, 4],
				[5, 6, 7, 8],
				[9, 10, 11, 12],
			])
		).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
	})
})
