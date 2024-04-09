/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
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
function detectCycle(head: ListNode | null): ListNode | null {
	let fast = head
	let slow = head

	while (fast && fast.next?.next) {
		fast = fast.next.next
		slow = slow!.next

		if (fast === slow) {
			break
		}
	}

	if (!fast || !fast.next?.next) {
		return null
	}

	slow = head

	while (fast !== slow) {
		fast = fast!.next
		slow = slow!.next
	}

	return fast
}
// @lc code=end
