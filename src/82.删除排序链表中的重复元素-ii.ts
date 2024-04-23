/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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
	// 输入：head = [1,2,3,3,4,4,5]
	// 输出：[1,2,5]

	let dummy = new ListNode(-1)
	let p1 = dummy
	let p2 = head

	while (p2 !== null) {
		if (p2.next && p2.val === p2.next.val) {
			// 遇到重复元素 while 循环跳过这一段
			while (p2.val === p2?.next?.val) {
				p2 = p2.next
			}

			p2 = p2.next

			if (p2 === null) {
				p1.next = null
			}
		} else {
			p1.next = p2
			p2 = p2.next
			p1 = p1.next
		}
	}

	return dummy.next
}
// @lc code=end
