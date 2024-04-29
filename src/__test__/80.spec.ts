import { removeDuplicates } from '@/80.删除有序数组中的重复项-ii'
import { describe, expect, it } from 'bun:test'

describe('80.删除有序数组中的重复项-ii', () => {
	it('removeDuplicates: [1,1,1,2,2,3]', () => {
		expect(removeDuplicates([1, 1, 1, 2, 2, 3])).toBe(5)
	})
})
