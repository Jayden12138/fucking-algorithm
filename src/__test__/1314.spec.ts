import { matrixBlockSum } from '@/1314.矩阵区域和'
import { it, expect, describe } from 'bun:test'

describe('1314.矩阵区域和', () => {
	it('matrixBlockSum: [[1,2,3],[4,5,6],[7,8,9]], 1', () => {
		let matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		]
		expect(matrixBlockSum(matrix, 1)).toEqual([
			[12, 21, 16],
			[27, 45, 33],
			[24, 39, 28],
		])
	})
	it('matrixBlockSum: [[1,2,3],[4,5,6],[7,8,9]], 2', () => {
		let matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		]
		expect(matrixBlockSum(matrix, 2)).toEqual([
			[45, 45, 45],
			[45, 45, 45],
			[45, 45, 45],
		])
	})
})
