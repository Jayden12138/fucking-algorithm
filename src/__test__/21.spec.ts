import { ListNode } from '@/types'
import { mergeTwoLists } from '@/21.合并两个有序链表'
import { describe, expect, it } from 'bun:test'

describe('21.合并两个有序链表', () => {
	it('mergeTwoLists: [1,2,4], [1,3,4]', () => {
		// 输入：l1 = [1,2,4], l2 = [1,3,4]
		// l1: 1 -> 2 -> 4
		// l2: 1 -> 3 -> 4
		// res: 1 -> 1 -> 2 -> 3 -> 4 -> 4
		const l1 = new ListNode(1, new ListNode(2, new ListNode(4)))
		const l2 = new ListNode(1, new ListNode(3, new ListNode(4)))
		expect(mergeTwoLists(l1, l2)).toEqual(
			new ListNode(
				1,
				new ListNode(
					1,
					new ListNode(
						2,
						new ListNode(3, new ListNode(4, new ListNode(4)))
					)
				)
			)
		)
	})
})
