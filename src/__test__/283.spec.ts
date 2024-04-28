import { moveZeroes } from '@/283.移动零'
import { describe, expect, it } from 'bun:test'

describe('283.移动零', () => {
	it('moveZeroes: [0,1,0,3,12]', () => {
		let s = [0, 1, 0, 3, 12]
		moveZeroes(s)
		expect(s).toEqual([1, 3, 12, 0, 0])
	})
})
