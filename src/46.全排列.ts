/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
	// 输入：nums = [1,2,3]
	// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

	let result: number[][] = []

	let l = nums.length

	func([], nums)

	function func(path: number[], choice: number[]) {
		if (path.length === l) {
			result.push([...path])
			return
		}

		for (const iter of choice) {
			if (path.includes(iter)) continue

			path.push(iter)

			func(path, choice)

			path.pop()
		}

		return
	}

	return result
}
// @lc code=end
export { permute }
