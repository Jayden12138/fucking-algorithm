import { partition } from '@/86.分隔链表'
import { describe, expect, it } from 'bun:test'
import { ListNode } from '@/types'

describe('86.分隔链表', () => {
	it('partition: [1,4,3,2,5,2], 3', () => {
		// 输入：head = [1,4,3,2,5,2], x = 3
		// 输出：[1,2,2,4,3,5]
		const l1 = new ListNode(
			1,
			new ListNode(
				4,
				new ListNode(
					3,
					new ListNode(2, new ListNode(5, new ListNode(2)))
				)
			)
		)
		expect(partition(l1, 3)).toEqual(
			new ListNode(
				1,
				new ListNode(
					2,
					new ListNode(
						2,
						new ListNode(4, new ListNode(3, new ListNode(5)))
					)
				)
			)
		)
	})
})
