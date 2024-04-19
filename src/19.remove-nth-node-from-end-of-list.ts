/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

function findNthFromEnd(head: ListNode | null, k: number): ListNode | null {
	let fast = head

	for (let i = 0; i < k; i++) {
		fast = fast?.next!
	}

	let slow = head

	while (fast) {
		slow = slow?.next!
		fast = fast.next
	}

	return slow
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	/**
     * 
        Input: head = [1,2,3,4,5], n = 2
        Output: [1,2,3,5]
     */

	let dummy = new ListNode(-1, head)

	const beforeDelNode = findNthFromEnd(dummy, n + 1)

	beforeDelNode!.next = beforeDelNode?.next?.next!

	return dummy.next
}
// @lc code=end
