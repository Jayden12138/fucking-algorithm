import { rotateRight } from '@/61.旋转链表'
import { it, expect, describe } from 'bun:test'
import { ListNode } from '@/types'

describe('61.旋转链表', () => {
	it('rotateRight: [1,2,3,4,5], 2', () => {
		// 输入：head = [1,2,3,4,5], k = 2
		// 输出：[4,5,1,2,3]
		const l1 = new ListNode(
			1,
			new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
		)
		expect(rotateRight(l1, 2)).toEqual(
			new ListNode(
				4,
				new ListNode(
					5,
					new ListNode(1, new ListNode(2, new ListNode(3)))
				)
			)
		)
	})

	it('rotateRight: [1], 0', () => {
		// 输入：head = [1], k = 0
		// 输出：[1]
		const l1 = new ListNode(1)
		expect(rotateRight(l1, 0)).toEqual(new ListNode(1))
	})
})
