/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
	// 输入：head = [1,2,3,4,5], k = 2
	// 输出：[2,1,4,3,5]

	// 剩余节点不足k个 停止
	// reverseN(head, k)

	let p = head
	for (let i = 0; i < k; i++) {
		if (!p) return head
		p = p.next
	}
	let last = reverseN(head, k)
	head!.next = reverseKGroup(p, k)

	return last
}
// 反转前N
let next
function reverseN(head: ListNode | null, n: number) {
	if (n === 1) {
		next = head?.next
		return head
	}

	let last = reverseN(head!.next, n - 1)
	head!.next!.next = head
	head!.next = next

	return last
}
// @lc code=end
export { reverseKGroup, reverseN }
