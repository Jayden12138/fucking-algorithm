/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
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
function getLen(head: ListNode | null) {
	if (!head) return 0
	let len = 0
	while (head) {
		head = head.next
		len++
	}
	return len
}
function rotateRight(head: ListNode | null, k: number): ListNode | null {
	// 输入：head = [1,2,3,4,5], k = 2
	// 输出：[4,5,1,2,3]

	if (!head) return head

	let kk = k % getLen(head)

	if (kk === 0) return head

	const d = new ListNode(-1, head)

	let fast = head
	for (let i = 0; i < kk; i++) {
		fast = fast?.next || null
	}

	let slow = head
	let last: ListNode | null = null
	let start: ListNode | null = null
	console.log(fast)
	while (fast) {
		if (!fast.next) {
			last = fast
			start = slow
		}

		slow = slow?.next || null
		fast = fast.next
	}

	//
	last.next = d.next
	start.next = null

	return slow
}
// @lc code=end
export { rotateRight }
