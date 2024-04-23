/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

function detectCycle(head: ListNode | null): ListNode | null {
	// 输入：head = [3,2,0,-4], pos = 1
	// 输出：返回索引为 1 的链表节点
	// 解释：链表中有一个环，其尾部连接到第二个节点。
	let fast = head
	let slow = head

	while (fast && fast.next) {
		fast = fast.next?.next!
		slow = slow!.next
		if (fast == slow) break
	}

	if (!fast || !fast.next) {
		return null
	}

	slow = head
	while (slow !== fast) {
		slow = slow!.next
		fast = fast!.next
	}

	return slow
}
// @lc code=end
export { detectCycle }
