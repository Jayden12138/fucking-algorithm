import { characterReplacement } from '@/424.替换后的最长重复字符'
import { it, expect, describe } from 'bun:test'

describe('424.替换后的最长重复字符', () => {
	it('characterReplacement: "ABAB", 2', () => {
		expect(characterReplacement('ABAB', 2)).toBe(4)
	})

	it('characterReplacement: "AABABBA", 1', () => {
		expect(characterReplacement('AABABBA', 1)).toBe(4)
	})
})
