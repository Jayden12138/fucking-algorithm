import { checkInclusion } from '@/567.字符串的排列'
import { it, expect, describe } from 'bun:test'

describe('567.字符串的排列', () => {
	it('checkInclusion: "ab", "eidbaooo"', () => {
		expect(checkInclusion('ab', 'eidbaooo')).toBe(true)
	})

	it('checkInclusion: "ab", "eidboaao"', () => {
		expect(checkInclusion('ab', 'eidboaao')).toBe(false)
	})
})
