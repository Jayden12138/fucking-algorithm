import { removeElement } from '@/27.移除元素'
import { describe, expect, it } from 'bun:test'

describe('27.移除元素', () => {
	it('removeElement: [3, 2, 2, 3], 3', () => {
		expect(removeElement([3, 2, 2, 3], 3)).toBe(2)
	})
})
