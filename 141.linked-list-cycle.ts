/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
 */

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

// class ListNode {
// 	val: number
// 	next: ListNode | null
// 	constructor(val?: number, next?: ListNode | null) {
// 		this.val = val === undefined ? 0 : val
// 		this.next = next === undefined ? null : next
// 	}
// }

function hasCycle(head: ListNode | null): boolean {
	let fast = head
	let slow = head

	while (fast && fast?.next?.next) {
		fast = fast!.next!.next
		slow = slow!.next
		if (fast === slow) {
			return true
		}
	}

	return false
}
// @lc code=end