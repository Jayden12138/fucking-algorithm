/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
	//
	// 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
	//     只使用数字1到9
	//     每个数字 最多使用一次
	//
	// 输入: k = 3, n = 9
	// 输出: [[1,2,6], [1,3,5], [2,3,4]]
	// 解释:
	// 1 + 2 + 6 = 9
	// 1 + 3 + 5 = 9
	// 2 + 3 + 4 = 9
	// 没有其他符合的组合了。
	//
	// 输入: k = 4, n = 1
	// 输出: []
	// 解释: 不存在有效的组合。
	// 在[1,9]范围内使用4个不同的数字，我们可以得到的最小和是1+2+3+4 = 10，因为10 > 1，没有有效的组合。

	let resultList: number[][] = []

	let choice: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	let temp: number[] = []
	let tempSum: number = 0

	function backTrack(start: number) {
		if (tempSum === n && temp.length === k) {
			resultList.push([...temp])
			return
		}

		if (tempSum > n) {
			return
		}

		for (let i = start; i < choice.length; i++) {
			temp.push(choice[i])
			tempSum += choice[i]

			backTrack(i + 1)

			temp.pop()
			tempSum -= choice[i]
		}
	}

	backTrack(0)

	return resultList
}
// @lc code=end
export { combinationSum3 }
