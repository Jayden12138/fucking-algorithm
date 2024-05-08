import { reverseWords } from '@/151.反转字符串中的单词'
import { it, expect, describe } from 'bun:test'

describe('151.反转字符串中的单词', () => {
	it('reverseWords: the sky is blue', () => {
		expect(reverseWords('the sky is blue')).toBe('blue is sky the')
	})

	it('reverseWords: hello world', () => {
		expect(reverseWords('  hello world  ')).toBe('world hello')
	})

	it('reverseWords: a good   example', () => {
		expect(reverseWords('a good   example')).toBe('example good a')
	})
})
