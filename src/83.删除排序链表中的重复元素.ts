/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
	// 输入：head = [1,1,2,3,3]
	// 输出：[1,2,3]

	let dummy = new ListNode(-999)
	let p = dummy

	let fast = head
	while (fast) {
		if (p.val !== fast.val) {
			let t = new ListNode(fast.val)
			p.next = t
			p = p.next
		}
		fast = fast.next
	}

	return dummy.next
}
// @lc code=end
export { deleteDuplicates }
