/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
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

function middleNode(head: ListNode | null): ListNode | null {
	// 输入：head = [1,2,3,4,5]
	// 输出：[3,4,5]
	// 解释：链表只有一个中间结点，值为 3 。

	let dummy = new ListNode(-1, head)

	let fast = dummy
	let slow = dummy

	while (fast) {
		slow = slow.next!
		fast = fast.next?.next!
	}

	return slow
}
// @lc code=end
