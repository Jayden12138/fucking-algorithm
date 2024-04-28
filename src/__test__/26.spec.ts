import { removeDuplicates } from '@/26.删除有序数组中的重复项'
import { describe, expect, it } from 'bun:test'

describe('26.删除有序数组中的重复项', () => {
	it('removeDuplicates: [1,1,2]', () => {
		expect(removeDuplicates([1, 1, 2])).toBe(2)
	})
})
