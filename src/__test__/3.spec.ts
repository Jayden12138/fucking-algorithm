import { lengthOfLongestSubstring } from '@/3.无重复字符的最长子串'
import { it, expect, describe } from 'bun:test'

describe('3.无重复字符的最长子串', () => {
	it('lengthOfLongestSubstring: "abcabcbb"', () => {
		// abc
		expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
	})
	it('lengthOfLongestSubstring: "pwwkew"', () => {
		// wke
		expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
	})
})
