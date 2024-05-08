/*
 * @lc app=leetcode.cn id=1109 lang=typescript
 *
 * [1109] 航班预订统计
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

	calc([i, j, num]: number[]) {
		this._diff[i - 1] += num
		this._diff[j] -= num
	}

	back() {
		const res: number[] = []
		res[0] = this._diff[0]

		for (let i = 1; i < this._diff.length; i++) {
			res[i] = res[i - 1] + this._diff[i]
		}

		return res
	}
}
function corpFlightBookings(bookings: number[][], n: number): number[] {
	// 输入：bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
	// 输出：[10,55,45,25,25]
	// 解释：
	// 航班编号        1   2   3   4   5
	// 预订记录 1 ：   10  10
	// 预订记录 2 ：       20  20
	// 预订记录 3 ：       25  25  25  25
	// 总座位数：      10  55  45  25  25
	// 因此，answer = [10,55,45,25,25]

	const diff = new DiffArr(new Array(n + 1).fill(0))

	for (let i = 0; i < bookings.length; i++) {
		diff.calc([...bookings[i]])
	}

	return diff.back().slice(0, n)
}
// @lc code=end
export { corpFlightBookings }
