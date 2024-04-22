/*
 * @lc app=leetcode.cn id=1261 lang=typescript
 *
 * [1261] 在受污染的二叉树中查找元素
 */

import { TreeNode } from '@/types'

// 给出一个满足下述规则的二叉树：

// root.val == 0
// 如果 treeNode.val == x 且 treeNode.left != null，那么 treeNode.left.val == 2 * x + 1
// 如果 treeNode.val == x 且 treeNode.right != null，那么 treeNode.right.val == 2 * x + 2
// 现在这个二叉树受到「污染」，所有的 treeNode.val 都变成了 -1。

// 请你先还原二叉树，然后实现 FindElements 类：

// FindElements(TreeNode* root) 用受污染的二叉树初始化对象，你需要先把它还原。
// bool find(int target) 判断目标值 target 是否存在于还原后的二叉树中并返回结果。

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

// 输入：
// ["FindElements","find","find","find"]
// [[[-1,-1,-1,-1,-1]],[1],[3],[5]]
// 输出：
// [null,true,true,false]
// 解释：
// FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);
// findElements.find(1); // return True
// findElements.find(3); // return True
// findElements.find(5); // return False

// 输入：
// ["FindElements","find","find"]
// [[[-1,null,-1]],[1],[2]]
// 输出：
// [null,false,true]
// 解释：
// FindElements findElements = new FindElements([-1,null,-1]);
// findElements.find(1); // return False
// findElements.find(2); // return True

class FindElements {
	private _root: TreeNode
	private _valMap = new Set<number>()
	constructor(root: TreeNode | null) {
		if (root) {
			this._root = root
			this._root.val = 0
			this._valMap.add(this._root.val)

			// recover
			this.recover(this._root)
		} else {
			this._root = new TreeNode(-1)
		}
	}

	find(target: number): boolean {
		return this._valMap.has(target)
	}

	recover(root: TreeNode | null) {
		// [-1,-1,-1,-1,-1]

		if (root) {
			if (root.left) {
				// 2x + 1
				root.left.val = root.val * 2 + 1
				this._valMap.add(root.left.val)

				this.recover(root.left)
			}

			if (root.right) {
				// 2x + 2
				root.right.val = root.val * 2 + 2
				this._valMap.add(root.right.val)

				this.recover(root.right)
			}
		} else {
			return
		}
	}
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
// @lc code=end
export { FindElements }
