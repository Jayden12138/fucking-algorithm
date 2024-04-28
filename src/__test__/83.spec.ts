import { deleteDuplicates } from '@/83.删除排序链表中的重复元素'
import { ListNode } from '@/types'
import { describe, expect, it } from 'bun:test'

describe('83.删除排序链表中的重复元素', () => {
	it('deleteDuplicates: [1,1,2]', () => {
		// 输入：head = [1,1,2]
		// 输出：[1,2]
		const l1 = new ListNode(1, new ListNode(1, new ListNode(2)))
		expect(deleteDuplicates(l1)).toEqual(new ListNode(1, new ListNode(2)))
	})
})
