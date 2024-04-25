import { addTwoNumbers } from '@/445.两数相加-ii'
import { describe, expect, it } from 'bun:test'
import { ListNode } from '@/types'

describe('445.两数相加-ii', () => {
	it('addTwoNumbers: [7,2,4,3], [5,6,4]', () => {
		const l1 = new ListNode(
			7,
			new ListNode(2, new ListNode(4, new ListNode(3)))
		)
		const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
		expect(addTwoNumbers(l1, l2)).toEqual(
			new ListNode(7, new ListNode(8, new ListNode(0, new ListNode(7))))
		)
	})
	it('addTwoNumbers: [2,4,3], [5,6,4]', () => {
		const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
		const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
		expect(addTwoNumbers(l1, l2)).toEqual(
			new ListNode(8, new ListNode(0, new ListNode(7)))
		)
	})
})
