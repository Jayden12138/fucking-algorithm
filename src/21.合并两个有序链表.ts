/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	// 输入：l1 = [1,2,4], l2 = [1,3,4]
	// 输出：[1,1,2,3,4,4]

	const dummy = new ListNode(-1)
	let p = dummy
	let p1 = list1
	let p2 = list2

	while (p1 != null && p2 != null) {
		if (p1.val <= p2.val) {
			p.next = p1
			p1 = p1.next
		} else {
			p.next = p2
			p2 = p2.next
		}
		p = p.next!
	}

	if (p1 != null) {
		p.next = p1
	}

	if (p2 != null) {
		p.next = p2
	}

	return dummy.next
}
// @lc code=end
export { mergeTwoLists }
