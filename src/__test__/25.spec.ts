import { reverseKGroup, reverseN } from '@/25.k-个一组翻转链表'
import { ListNode } from '@/types'
import { describe, expect, it } from 'bun:test'

describe('25.k 个一组翻转链表', () => {
	it('reverseKGroup: [1,2,3,4,5], k = 2', () => {
		// 输入：head = [1,2,3,4,5], k = 2
		// 输出：[2,1,4,3,5]
		const l1 = new ListNode(
			1,
			new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
		)
		expect(reverseKGroup(l1, 2)).toEqual(
			new ListNode(
				2,
				new ListNode(
					1,
					new ListNode(4, new ListNode(3, new ListNode(5)))
				)
			)
		)
	})

	// it('reverseN: [1,2,3,4,5], n = 2', () => {
	// 	// 输入：head = [1,2,3,4,5], n = 2
	// 	// 输出：[2,1,3,4,5]
	// 	const l1 = new ListNode(
	// 		1,
	// 		new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
	// 	)
	// 	expect(reverseN(l1, 2)).toEqual(
	// 		new ListNode(
	// 			2,
	// 			new ListNode(
	// 				1,
	// 				new ListNode(3, new ListNode(4, new ListNode(5)))
	// 			)
	// 		)
	// 	)
	// })
})
