/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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
function isPalindrome(head: ListNode | null): boolean {
	// 输入：head = [1,2,2,1]
	// 输出：true
	//
	// 输入：head = [1,2]
	// 输出：false
	// 快慢指针找中点
	// 反转链表
	// 双指针对比两链表
	let left = head
	let right = reverse(getMid(head))

	while (right) {
		if (left?.val === right.val) {
			left = left?.next
			right = right.next
		} else {
			return false
		}
	}
	return true
}
function reverse(head: ListNode | null) {
	// 1.

	let cur = head
	let prev: ListNode | null = null

	while (cur) {
		let next = cur.next
		cur.next = prev
		prev = cur
		cur = next
	}

	return prev

	// 2. 递归
}
function getMid(head: ListNode | null) {
	let fast = head
	let slow = head

	while (fast && fast.next) {
		fast = fast.next.next
		slow = slow!.next
	}

	if (fast) {
		slow = slow!.next
	}
	return slow
}
// @lc code=end
export { isPalindrome }
