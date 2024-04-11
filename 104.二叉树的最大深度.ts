/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
 */
export class TreeNode {
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

function maxDepth(root: TreeNode | null): number {
	// 输入：root = [3,9,20,null,null,15,7]
	// 输出：3

	let res = 0
	let depth = 0

	/**
	 * [3,9,20,null,null,15,7]
	 *
	 *
	 * [1, null, 2]
	 *
	 *
	 *
	 */

	traverse(root)

	function traverse(root: TreeNode | null) {
		// console.log('root: ', root)
		if (root == null) return
		// 前序
		depth++
		// console.log(depth, 'depth 1')
		if (root.left == null && root.right == null) {
			// 到达叶子节点 记录当前深度
			res = Math.max(res, depth)

			// console.log(res, 'res')
		}
		traverse(root.left)
		// 中序
		traverse(root.right)
		// 后序
		// 在前序位置上添加的
		depth--
		// console.log(depth, 'depth 2')
	}

	return res
}

// @lc code=end
export { maxDepth }
