/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
	// 1 <= nums.length <= 8

	// 输入：nums = [1,1,2]
	// 输出：
	// [[1,1,2],
	// [1,2,1],
	// [2,1,1]]

	/**
	 *
	 * 如何保证 相同元素 的相对位置 不改变
	 *
	 */

	nums.sort((a, b) => a - b)

	let resultList: number[][] = []
	let used: boolean[] = new Array(nums.length).fill(false)
	let temp: number[] = []

	function backTrack() {
		if (temp.length === nums.length) {
			resultList.push([...temp])
			return
		}

		for (let i = 0; i < nums.length; i++) {
			if (used[i]) {
				continue
			}
			if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
				continue
			}
			temp.push(nums[i])
			used[i] = true

			backTrack()

			temp.pop()
			used[i] = false
		}
	}

	backTrack()

	return resultList
}
// @lc code=end
export { permuteUnique }
