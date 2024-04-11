/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
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

function diameterOfBinaryTree(root: TreeNode | null): number {
	// 输入：root = [1,2,3,4,5]
	// 输出：3
	// 解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。

	/**
	 * [4,
	 * -7,-3,
	 * null,null,-9,-3,
	 * 9,-7,-4,null, 6,null,-6,-6,
	 * null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]
	 *
	 *
	 *
	 */
	let maxDiameter = 0

	function findMaxDepth(root: TreeNode | null): number {
		if (!root) return 0

		let leftMax = findMaxDepth(root.left)
		let rightMax = findMaxDepth(root.right)

		maxDiameter = Math.max(maxDiameter, leftMax + rightMax)

		return Math.max(leftMax, rightMax) + 1
	}

	findMaxDepth(root)
	return maxDiameter
}
// @lc code=end

export { diameterOfBinaryTree }
