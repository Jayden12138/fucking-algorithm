import { containsNearbyDuplicate } from '@/219.存在重复元素-ii'
import { it, expect, describe } from 'bun:test'

describe('219.存在重复元素-ii', () => {
	it('containsNearbyDuplicate: [1,2,3,1], 3', () => {
		expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true)
	})

	it('containsNearbyDuplicate: [1,0,1,1], 1', () => {
		expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true)
	})

	it('containsNearbyDuplicate: [1,2,3,1,2,3], 2', () => {
		expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false)
	})
})
