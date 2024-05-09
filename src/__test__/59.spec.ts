import { generateMatrix } from '@/59.螺旋矩阵-ii'
import { it, expect, describe } from 'bun:test'

describe('59.螺旋矩阵-ii', () => {
	it('generateMatrix: 3', () => {
		expect(generateMatrix(3)).toEqual([
			[1, 2, 3],
			[8, 9, 4],
			[7, 6, 5],
		])
	})
})
