/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
	// 输入：head = [1,2,3,4,5]
	// 输出：[5,4,3,2,1]
	if (!head || !head.next) return head

	let last = reverseList(head.next)
	head.next.next = head
	head.next = null
	return last
}
// @lc code=end
export { reverseList }
