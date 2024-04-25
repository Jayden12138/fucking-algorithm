import { addTwoNumbers } from '@/2.两数相加'
import { describe, expect, it } from 'bun:test'
import { ListNode } from '@/types'

describe('2.两数相加', () => {
	it('addTwoNumbers: [2,4,3], [5,6,4]', () => {
		// 输入：l1 = [2,4,3], l2 = [5,6,4]
		// 输出：[7,0,8]
		const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
		const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
		expect(addTwoNumbers(l1, l2)).toEqual(
			new ListNode(7, new ListNode(0, new ListNode(8)))
		)
	})

	it('addTwoNumbers: [0], [0]', () => {
		// 输入：l1 = [0], l2 = [0]
		// 输出：[0]
		const l1 = new ListNode(0)
		const l2 = new ListNode(0)
		expect(addTwoNumbers(l1, l2)).toEqual(new ListNode(0))
	})

	it('addTwoNumbers: [9,9,9,9,9,9,9], [9,9,9,9]', () => {
		// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
		// 输出：[8,9,9,9,0,0,0,1]
		// [8,9,9,9,10,9,9,9]
		const l1 = new ListNode(
			9,
			new ListNode(
				9,
				new ListNode(
					9,
					new ListNode(
						9,
						new ListNode(9, new ListNode(9, new ListNode(9)))
					)
				)
			)
		)
		const l2 = new ListNode(
			9,
			new ListNode(9, new ListNode(9, new ListNode(9)))
		)
		expect(addTwoNumbers(l1, l2)).toEqual(
			new ListNode(
				8,
				new ListNode(
					9,
					new ListNode(
						9,
						new ListNode(
							9,
							new ListNode(
								0,
								new ListNode(
									0,
									new ListNode(0, new ListNode(1))
								)
							)
						)
					)
				)
			)
		)
	})
})
