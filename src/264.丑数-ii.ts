/*
 * @lc app=leetcode.cn id=264 lang=typescript
 *
 * [264] 丑数 II
 */

// @lc code=start
function nthUglyNumber(n: number): number {
	// 1 <= n <= 1690
	// 输入：n = 10
	// 输出：12
	// 解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。

	/**
	 * 2 3 5
	 *
	 * 1 -> 2 -> 2*2 -> 2*3 -> ...
	 * 1 -> 3 -> 3*2 -> 3*3 -> ...
	 * 1 -> 5 -> 5*2 -> 5*3 -> ...
	 *
	 * 1 2 3 4 5 6 8 9 ...
	 *
	 *
	 */

	// 索引
	let p2 = 1
	let p3 = 1
	let p5 = 1

	// value
	let p2_val = 1
	let p3_val = 1
	let p5_val = 1

	const arr: number[] = new Array(n + 1).fill(1)
	let p = 1

	while (p <= n) {
		let min = Math.min(p2_val, p3_val, p5_val)
		arr[p] = min
		p++

		if (min === p2_val) {
			p2_val = 2 * arr[p2]
			p2++
		}
		if (min === p5_val) {
			p5_val = 5 * arr[p5]
			p5++
		}
		if (min === p3_val) {
			p3_val = 3 * arr[p3]
			p3++
		}
	}

	return arr[arr.length - 1]
}
// @lc code=end
export { nthUglyNumber }
