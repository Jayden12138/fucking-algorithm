/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
	// 输入：head = [1,1,2,3,3]
	// 输出：[1,2,3]

	/**
	 *
	 * [1,1,2,3,3]
	 *
	 *
	 *
	 *
	 */

	let fast = head
	let slow = head

	while (fast) {
		fast = fast!.next
		if (fast?.val !== slow?.val) {
			slow!.next = fast
			slow = fast
		}
	}

	if (slow) {
		slow.next = null
	}

	return head
}
// @lc code=end
