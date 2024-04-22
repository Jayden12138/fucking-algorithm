import { FindElements } from '@/1261.在受污染的二叉树中查找元素'
import { describe, expect, it } from 'bun:test'
import { TreeNode } from '@/types'

describe('1261.在受污染的二叉树中查找元素', () => {
	it('findElements', () => {
		// [-1, -1, -1, -1, -1]
		let root = new TreeNode(
			-1,
			new TreeNode(
				-1,
				new TreeNode(-1, null, null),
				new TreeNode(-1, null, null)
			),
			new TreeNode(-1, null, null)
		)
		const findElements = new FindElements(root)
		expect(findElements.find(1)).toBe(true)
		expect(findElements.find(3)).toBe(true)
		expect(findElements.find(5)).toBe(false)
	})
})
