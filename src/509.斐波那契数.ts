/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
	// F(0) = 0，F(1) = 1
	// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
	// 输入：n = 2
	// 输出：1
	// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1

	// 3.
	// 对于 dp(n) 来说 有用的是 dp(n - 1) dp(n - 2)
	// 其他的没有必要进行存储

	if (n === 1 || n === 0) return n

	let arr = [0, 1]
	let res = 0

	for (let i = 2; i <= n; i++) {
		let num_i_0 = arr[0]
		let num_i_1 = arr[1]

		res = num_i_0 + num_i_1

		arr[1] = res
		arr[0] = num_i_1
	}

	return res
}
// @lc code=end

export { fib }
