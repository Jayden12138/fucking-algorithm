import { longestSubstring } from '@/395.至少有-k-个重复字符的最长子串'
import { it, expect, describe } from 'bun:test'

describe('395.至少有-k-个重复字符的最长子串', () => {
	it('longestSubstring: "aaabb", 3', () => {
		expect(longestSubstring('aaabb', 3)).toBe(3)
	})
})
