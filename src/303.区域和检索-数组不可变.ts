/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {
	// 输入：
	// ["NumArray", "sumRange", "sumRange", "sumRange"]
	// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
	// 输出：
	// [null, 1, -1, -3]

	// 解释：
	// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
	// numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
	// numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1))
	// numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))

	_prefixSum: number[] = []
	constructor(nums: number[]) {
		this._prefixSum[0] = 0

		for (let i = 1; i <= nums.length; i++) {
			this._prefixSum[i] = nums[i - 1] + this._prefixSum[i - 1]
		}
	}

	sumRange(left: number, right: number): number {
		return this._prefixSum[right + 1] - this._prefixSum[left]
	}
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
export { NumArray }
