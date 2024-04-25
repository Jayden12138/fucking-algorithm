/*
 * @lc app=leetcode.cn id=445 lang=typescript
 *
 * [445] 两数相加 II
 */
import { ListNode } from '@/types'
import { reverseList } from '@/206.反转链表'
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
	// 输入：l1 = [7,2,4,3], l2 = [5,6,4]
	// 输出：[7,8,0,7]
	//
	// 输入：l1 = [2,4,3], l2 = [5,6,4]
	// 输出：[8,0,7]

	// l1 l2 入栈
	let p1 = l1
	let stack1: number[] = []
	while (p1 != null) {
		stack1.push(p1.val)
		p1 = p1.next
	}

	let p2 = l2
	let stack2: number[] = []
	while (p2 != null) {
		stack2.push(p2.val)
		p2 = p2.next
	}
	// [ 7, 2, 4, 3 ]
	// [ 5, 6, 4 ]
	console.log(stack1, stack2)

	// pop

	const dummy = new ListNode(-1)
	let p = dummy

	let carry = 0

	while (stack1.length || stack2.length || carry) {
		let val = carry

		if (stack1.length > 0) {
			val += stack1.pop()!
		}

		if (stack2.length > 0) {
			val += stack2.pop()!
		}

		carry = Math.floor(val / 10)
		val %= 10

		const newNode = new ListNode(val)
		newNode.next = dummy.next
		dummy.next = newNode
	}

	return dummy.next
}
// @lc code=end
export { addTwoNumbers }
