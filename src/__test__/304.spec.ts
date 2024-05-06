import { NumMatrix } from '@/304.二维区域和检索-矩阵不可变'
import { it, expect, describe } from 'bun:test'

describe('304.二维区域和检索-矩阵不可变', () => {
	it('NumMatrix: [[3, 0, 1, 4, 2],[5, 6, 3, 2, 1],[1, 2, 0, 1, 5],[4, 1, 0, 1, 7],[1, 0, 3, 0, 5]]', () => {
		let obj = new NumMatrix([
			[3, 0, 1, 4, 2],
			[5, 6, 3, 2, 1],
			[1, 2, 0, 1, 5],
			[4, 1, 0, 1, 7],
			[1, 0, 3, 0, 5],
		])
		expect(obj.sumRegion(2, 1, 4, 3)).toBe(8)
	})
})
