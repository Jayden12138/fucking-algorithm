/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
	// 输入：candidates = [2,3,6,7], target = 7
	// 输出：[[2,2,3],[7]]
	// 解释：
	// 2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
	// 7 也是一个候选， 7 = 7 。
	// 仅有这两种组合。

	let resultList: number[][] = []

	let temp: number[] = []
	let tempSum: number = 0

	function backTrack() {
		if (tempSum === target) {
			resultList.push([...temp])
			return
		}

		if (tempSum > target) {
			return
		}

		for (let i = 0; i < candidates.length; i++) {
			let preLastNum = temp[temp.length - 1]
			if (candidates[i] < preLastNum) continue

			temp.push(candidates[i])
			tempSum += candidates[i]

			backTrack()

			temp.pop()
			tempSum -= candidates[i]
		}
	}

	backTrack()

	return resultList
}
// @lc code=end
export { combinationSum }
