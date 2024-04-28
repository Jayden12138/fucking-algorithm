import { longestPalindrome } from '@/5.最长回文子串'
import { describe, expect, it } from 'bun:test'

describe('5.最长回文子串', () => {
	it('longestPalindrome: "babad"', () => {
		expect(longestPalindrome('babad')).toBe('bab')
	})
	it('longestPalindrome: "cbbd"', () => {
		expect(longestPalindrome('cbbd')).toBe('bb')
	})
})
