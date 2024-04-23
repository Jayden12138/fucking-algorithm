/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	// 输入：head = [1,2,3,4,5], n = 2
	// 输出：[1,2,3,5]
	if (!head) return null

	let dummy = new ListNode(-1, head)

	let slow = findNthFromEnd(dummy, n + 1)

	slow!.next = slow?.next?.next!

	return dummy.next
}
function findNthFromEnd(head: ListNode | null, n: number) {
	let fast = head
	let slow = head

	for (let i = 0; i < n; i++) {
		fast = fast?.next!
	}

	while (fast) {
		slow = slow!.next
		fast = fast.next
	}

	return slow
}
// @lc code=end
export { removeNthFromEnd }
