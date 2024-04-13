/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
	// 输入：nums = [1,2,3]
	// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

	// 1 <= nums.length <= 10

	let result: number[][] = []

	let t: number[] = []

	function backTrack(start: number) {
		result.push([...t])

		// 0
		for (let i = start; i < nums.length; i++) {
			t.push(nums[i])

			// 注意这里是i+1
			backTrack(i + 1)

			t.pop()
		}
	}

	backTrack(0)

	return result
}
// @lc code=end
export { subsets }
