import { isPalindrome } from '@/234.回文链表'
import { describe, expect, it } from 'bun:test'
import { ListNode } from '@/types'

describe('234.回文链表', () => {
	it('isPalindrome: [1,2,2,1]', () => {
		// 输入：head = [1,2,2,1]
		// 输出：true
		const l1 = new ListNode(
			1,
			new ListNode(2, new ListNode(2, new ListNode(1)))
		)
		expect(isPalindrome(l1)).toBe(true)
	})

	// it('isPalindrome: [1,2]', () => {
	// 	// 输入：head = [1,2]
	// 	// 输出：false
	// 	const l1 = new ListNode(1, new ListNode(2))
	// 	expect(isPalindrome(l1)).toBe(false)
	// })
})
