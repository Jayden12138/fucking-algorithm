/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
	// 链表中节点的数目在范围 [0, 200] 内
	//
	// 输入：head = [1,4,3,2,5,2], x = 3
	// 输出：[1,2,2,4,3,5]

	const dummy1 = new ListNode(-1) // 小于
	let p1 = dummy1
	const dummy2 = new ListNode(-1) // 大于等于
	let p2 = dummy2

	let p = head

	while (p != null) {
		if (p.val >= x) {
			p2.next = p
			p2 = p2.next
		} else {
			p1.next = p
			p1 = p1.next
		}
		// p = p.next!
		// 这里不能直接让p前进一
		// 需要断开原链接
		let t = p.next
		p.next = null
		p = t
	}

	p1.next = dummy2.next

	return dummy1.next
}
// @lc code=end
export { partition }
