/*
 * @lc app=leetcode id=1094 lang=typescript
 *
 * [1094] Car Pooling
 */

// @lc code=start
class DiffArr {
	diff: number[] = []
	constructor(arr: number[]) {
		this.diff = arr.slice(0)
		const l = arr.length

		for (let i = 1; i < l; i++) {
			this.diff[i] = arr[i] - arr[i - 1]
		}
	}

	increase(start: number, end: number, val: number) {
		this.diff[start] += val
		if (end + 1 < this.diff.length) {
			this.diff[end + 1] -= val
		}
	}

	recover() {
		const l = this.diff.length
		const res = this.diff.slice(0)
		for (let i = 1; i < l; i++) {
			res[i] = res[i - 1] + this.diff[i]
		}

		return res
	}
}
function carPooling(trips: number[][], capacity: number): boolean {
	/**
     * 
        Input: trips = [[2,1,5],[3,3,7]], capacity = 4
        Output: false

        [[2,1,5],[3,5,7]]
        3

     */

	const arr = new Array(1001).fill(0)

	const diffArr = new DiffArr(arr)

	for (let i = 0; i < trips.length; i++) {
		const [num, start, end] = trips[i]
		// TODO: 注意这里传递的 end - 1
		diffArr.increase(start, end - 1, num)
	}

	const res = diffArr.recover()

	for (let i = 0; i < res.length; i++) {
		if (res[i] > capacity) {
			return false
		}
	}
	return true
}
// @lc code=end

export { carPooling }
