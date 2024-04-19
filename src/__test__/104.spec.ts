import { maxDepth, TreeNode } from '@/104.二叉树的最大深度'
import { describe, expect, it } from 'bun:test'
describe('first', () => {
	it('maxDepth 1', () => {
		const root = new TreeNode(
			3,
			new TreeNode(9),
			new TreeNode(20, new TreeNode(15), new TreeNode(7))
		)
		expect(maxDepth(root)).toBe(3)
	})

	it('maxDepth 2', () => {
		const root = new TreeNode(1, null, new TreeNode(2))
		expect(maxDepth(root)).toBe(2)
	})
})
