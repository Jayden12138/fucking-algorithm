/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
 */

class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}
// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minDepth(root: TreeNode | null): number {
	// 输入：root = [3,9,20,null,null,15,7]
	// 输出：2
	if (!root) {
		return 0
	}

	let queue: TreeNode[] = []
	let depth: number = 0

	queue.push(root)
	depth++

	while (queue.length > 0) {
		let queueLength = queue.length

		for (let i = 0; i < queueLength; i++) {
			let currentNode = queue.shift()

			if (currentNode?.left === null && currentNode.right === null) {
				return depth
			}

			if (currentNode?.left) {
				queue.push(currentNode.left)
			}

			if (currentNode?.right) {
				queue.push(currentNode.right)
			}
		}
		depth++
	}

	return -1
}
// @lc code=end

export { minDepth }
