/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
	// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
	// 输出:
	// [
	//     [1,1,6],
	//     [1,2,5],
	//     [1,7],
	//     [2,6]
	// ]

	candidates.sort((a, b) => a - b)

	let resultList: number[][] = []

	let temp: number[] = []
	let tempSum: number = 0

	function backTrack(start: number) {
		if (tempSum === target) {
			resultList.push([...temp])
		}

		if (tempSum > target) {
			return
		}

		for (let i = start; i < candidates.length; i++) {
			if (i > start && candidates[i] === candidates[i - 1]) {
				continue
			}

			temp.push(candidates[i])
			tempSum += candidates[i]

			backTrack(i + 1)

			temp.pop()
			tempSum -= candidates[i]
		}
	}

	backTrack(0)

	return resultList
}
// @lc code=end
export { combinationSum2 }
