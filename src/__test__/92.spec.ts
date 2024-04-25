import { reverseBetween } from '@/92.反转链表-ii'
import { describe, expect, it } from 'bun:test'
import { ListNode } from '@/types'

describe('92.反转链表-ii', () => {
	// it('reverseN: [1,2,3,4,5], 2', () => {
	// 	// 输入：head = [1,2,3,4,5], n = 2
	// 	// 输出 ：[2,1,3,4,5]
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
	it('reverseBetween: [1,2,3,4,5], 2, 4', () => {
		// 输入：head = [1,2,3,4,5], left = 2, right = 4
		// 输出：[1,4,3,2,5]
		const l1 = new ListNode(
			1,
			new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
		)
		expect(reverseBetween(l1, 2, 4)).toEqual(
			new ListNode(
				1,
				new ListNode(
					4,
					new ListNode(3, new ListNode(2, new ListNode(5)))
				)
			)
		)
	})
})
