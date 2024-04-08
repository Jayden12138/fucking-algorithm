/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
class NumArray {
	preSums: number[] = []
	constructor(nums: number[]) {
		//    [1, 2, 3]
		// [0, 1, 3, 6]
		// preSums[2] = 1 + 2 = nums[1] + preSums[1]
		// 0, 1
		// preSums[2] - preSums[0] = 3 - 0 = 3

		let l = nums.length
		this.preSums[0] = 0
		for (let i = 1; i <= l; i++) {
			this.preSums[i] = nums[i - 1] + this.preSums[i - 1]
		}
	}

	sumRange(left: number, right: number): number {
		// [left, right]

		//    [1, 2, 3]
		// [0, 1, 3, 6]

		// 1, 2
		// preSums[3] - preSums[1]
		return this.preSums[right + 1] - this.preSums[left]
	}
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
