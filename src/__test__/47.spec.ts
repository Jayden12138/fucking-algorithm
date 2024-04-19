import { permuteUnique } from '@/47.全排列-ii'
import { describe, expect, it } from 'bun:test'

describe('first', () => {
	it('permuteUnique', () => {
		expect(permuteUnique([1, 1, 2])).toEqual([
			[1, 1, 2],
			[1, 2, 1],
			[2, 1, 1],
		])
	})
})
