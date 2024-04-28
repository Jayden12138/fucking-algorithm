import { isPalindrome } from '@/125.验证回文串'
import { describe, expect, it } from 'bun:test'

describe('125.验证回文串', () => {
	it('isPalindrome: "A man, a plan, a canal: Panama"', () => {
		// 输入："A man, a plan, a canal: Panama"
		// 输出：true
		expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
	})
	it('isPalindrome: "race a car"', () => {
		// 输入："race a car"
		// 输出：false
		expect(isPalindrome('race a car')).toBe(false)
	})
})
