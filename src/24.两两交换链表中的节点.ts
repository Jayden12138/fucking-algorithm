/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */
import { ListNode } from './types'
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

function swapPairs(head: ListNode | null): ListNode | null {
	let p = head
	for (let i = 0; i < 2; i++) {
		if (!p) return head
		p = p.next
	}

	let last = reserveN(head, 2)
	head!.next = swapPairs(p)

	return last
}
let next: ListNode | null = null
function reserveN(head: ListNode | null, n: number) {
	if (n == 1) {
		next = head!.next
		return head
	}

	let last = reserveN(head!.next, n - 1)

	head!.next!.next = head
	head!.next = next

	return last
}
// @lc code=end
export { swapPairs }
