import { reverseString } from '@/344.反转字符串'
import { describe, expect, it } from 'bun:test'

describe('344.反转字符串', () => {
	it('reverseString: ["h","e","l","l","o"]', () => {
		let s = ['h', 'e', 'l', 'l', 'o']
		reverseString(s)
		expect(s).toEqual(['o', 'l', 'l', 'e', 'h'])
	})
})
