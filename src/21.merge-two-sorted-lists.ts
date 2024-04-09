/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	/**
     * 
        Input: list1 = [1,2,4], list2 = [1,3,4]
        Output: [1,1,2,3,4,4]
     */

	const dummyHead = new ListNode(-1)
	let p = dummyHead

	while (list1 && list2) {
		if (list1.val < list2.val) {
			p.next = list1
			list1 = list1.next
		} else {
			p.next = list2
			list2 = list2.next
		}
		p = p.next
	}

	if (list1) p.next = list1
	if (list2) p.next = list2

	return dummyHead.next
}
// @lc code=end

export { mergeTwoLists, ListNode }
