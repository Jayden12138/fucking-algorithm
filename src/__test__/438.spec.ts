import { findAnagrams } from '@/438.找到字符串中所有字母异位词'
import { it, expect, describe } from 'bun:test'

describe('438.找到字符串中所有字母异位词', () => {
	it('findAnagrams: "cbaebabacd", "abc"', () => {
		expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6])
	})

	it('findAnagrams: "abab", "ab"', () => {
		expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2])
	})
})
