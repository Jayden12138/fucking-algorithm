/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */
import { ListNode } from '@/types'
// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	// 输入：l1 = [2,4,3], l2 = [5,6,4]
	// 输出：[7,0,8]
	// 解释：342 + 465 = 807.
	//
	// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
	// 输出：[8,9,9,9,0,0,0,1]

	const dummy = new ListNode(-1)
	let p = dummy

	let p1 = l1
	let p2 = l2

	let carry = 0

	while (p1 != null || p2 != null || carry > 0) {
		// 进位
		let val = carry

		if (p1 !== null) {
			val += p1.val
			p1 = p1.next
		}

		if (p2 !== null) {
			val += p2.val
			p2 = p2.next
		}

		carry = Math.floor(val / 10)
		val = val % 10
		let newNode = new ListNode(val)
		p.next = newNode
		p = p.next
	}

	return dummy.next
}
// @lc code=end
export { addTwoNumbers }
