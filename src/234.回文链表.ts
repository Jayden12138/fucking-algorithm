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
let left
function isPalindrome(head: ListNode | null): boolean {
	// 输入：head = [1,2,2,1]
	// 输出：true
	//
	// 输入：head = [1,2]
	// 输出：false
	left = head

	return reverse(head)
}
function reverse(head: ListNode | null) {
	if (!head) {
		return true
	}

	// 前序
	let res = reverse(head.next)
	//后序 倒叙
	res = res && head.val === left!.val
	left = left!.next
	return res
}
// @lc code=end
export { isPalindrome }
