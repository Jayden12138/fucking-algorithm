import { findMaxLength } from '@/525.连续数组'
import { it, expect, describe } from 'bun:test'

describe('525.连续数组', () => {
	it('findMaxLength: [0,1]', () => {
		expect(findMaxLength([0, 1])).toBe(2)
	})
	it('findMaxLength: [0,1,0]', () => {
		expect(findMaxLength([0, 1, 0])).toBe(2)
	})
})
