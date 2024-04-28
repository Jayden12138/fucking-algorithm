import { twoSum } from '@/1.两数之和'
import { describe, expect, it } from 'bun:test'

describe('1. 两数之和', () => {
	it('twoSum: [2, 7, 11, 15], 9', () => {
		expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 0])
	})
})
