import { reverseList } from '@/206.反转链表'
import { ListNode } from '@/types'
import { describe, expect, it } from 'bun:test'

describe('206.反转链表', () => {
	it('reverseList: [1,2,3,4,5]', () => {
		// 输入：head = [1,2,3,4,5]
		// 输出：[5,4,3,2,1]
		const l1 = new ListNode(
			1,
			new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
		)
		expect(reverseList(l1)).toEqual(
			new ListNode(
				5,
				new ListNode(
					4,
					new ListNode(3, new ListNode(2, new ListNode(1)))
				)
			)
		)
	})
})
