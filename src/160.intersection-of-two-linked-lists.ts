/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
 */

class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}
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

function getIntersectionNode(
	headA: ListNode | null,
	headB: ListNode | null
): ListNode | null {
	// listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3

	let p1 = headA
	let p2 = headB

	while (p1 !== p2) {
		// p1 = p1?.next || headB
		// p2 = p2?.next || headA

		p1 = !p1 ? headB : p1.next
		p2 = !p2 ? headA : p2.next
	}

	return p1
}
// @lc code=end
