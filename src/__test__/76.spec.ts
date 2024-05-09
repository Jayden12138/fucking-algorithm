import { minWindow } from '@/76.最小覆盖子串'
import { it, expect, describe } from 'bun:test'

describe('76.最小覆盖子串', () => {
	it('minWindow: "ADOBECODEBANC", "ABC"', () => {
		expect(minWindow('ADOBECODEBANC', 'ABC')).toBe('BANC')
	})

	it('minWindow: "a", "a"', () => {
		expect(minWindow('a', 'a')).toBe('a')
	})

	it('minWindow: "a", "aa"', () => {
		expect(minWindow('a', 'aa')).toBe('')
	})

	it('minWindow: "aa", "aa"', () => {
		expect(minWindow('aa', 'aa')).toBe('aa')
	})
})
