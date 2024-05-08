/*
 * @lc app=leetcode.cn id=1094 lang=typescript
 *
 * [1094] 拼车
 */

// @lc code=start
class DiffArr {
	_diff: number[] = []
	constructor(arr: number[]) {
		this._diff[0] = arr[0]
		for (let i = 1; i < arr.length; i++) {
			this._diff[i] = arr[i] - arr[i - 1]
		}
	}

	calc([number, i, j]: number[]) {
		this._diff[i] += number
		this._diff[j] -= number
	}

	back() {
		let res: number[] = []
		res[0] = this._diff[0]
		for (let i = 1; i < this._diff.length; i++) {
			res[i] = this._diff[i] + res[i - 1]
		}

		return res
	}
}
function carPooling(trips: number[][], capacity: number): boolean {
	// 1 <= trips.length <= 1000
	// trips[i].length == 3
	// 1 <= numPassengersi <= 100
	// 输入：trips = [[2,1,5],[3,3,7]], capacity = 4
	// 输出：false

	const diffArr = new DiffArr(new Array(1001).fill(0))

	for (let i = 0; i < trips.length; i++) {
		diffArr.calc(trips[i])
	}
	return diffArr.back().filter(o => o > capacity).length === 0
}
// @lc code=end

export { carPooling }
