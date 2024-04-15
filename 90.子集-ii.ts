/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
	// 输入：nums = [1,2,2]
	// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

	nums.sort((a, b) => a - b)

	let resultList: number[][] = []

	let temp: number[] = []

	function backTrack(start: number) {
		resultList.push([...temp])

		for (let i = start; i < nums.length; i++) {
			if (i > start && nums[i] === nums[i - 1]) {
				continue
			}
			temp.push(nums[i])

			backTrack(i + 1)

			temp.pop()
		}
	}

	backTrack(0)

	return resultList
}
// @lc code=end
export { subsetsWithDup }
