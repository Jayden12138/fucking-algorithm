/*
 * @lc app=leetcode id=1109 lang=typescript
 *
 * [1109] Corporate Flight Bookings
 */

// @lc code=start
// 差分数组
export class DiffArr {
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

export function corpFlightBookings(bookings: number[][], n: number): number[] {
	/**
     * 
     * 
     * [1, 2, 10, 2, 3]
     * 
     * [1, 1, 8, -8, 1]
     * 
     * [11, 1, -2, -8, 1]
     * 
     * [11, 12, 10, 2, 3]
     * 
     * 
     * 
     * 
     * 
        Input: bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
        Output: [10,55,45,25,25]
        Explanation:
        Flight labels:        1   2   3   4   5
        Booking 1 reserved:  10  10
        Booking 2 reserved:      20  20
        Booking 3 reserved:      25  25  25  25
        Total seats:         10  55  45  25  25
        Hence, answer = [10,55,45,25,25]
     * 
     */

	const diff = new Array(n).fill(0)
	// const diff = [1, 2, 10, 2, 3]
	const diffArr = new DiffArr(diff)

	bookings.forEach(([start, end, val]) => {
		diffArr.increase(start - 1, end - 1, val)
	})

	return diffArr.recover()
}
// @lc code=end
