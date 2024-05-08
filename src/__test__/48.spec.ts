import { rotate } from '@/48.旋转图像'
import { it, expect, describe } from 'bun:test'

describe('48.旋转图像', () => {
	it('rotate: [[1,2,3],[4,5,6],[7,8,9]]', () => {
		let res = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		]
		rotate(res)
		expect(res).toEqual([
			[7, 4, 1],
			[8, 5, 2],
			[9, 6, 3],
		])
	})
})
