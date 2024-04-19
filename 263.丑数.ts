/*
 * @lc app=leetcode.cn id=263 lang=typescript
 *
 * [263] 丑数
 */

// @lc code=start
function isUgly(n: number): boolean {
	if (n <= 0) {
		return false
	}

	let arr = [2, 3, 5]
	for (let i = 0; i < arr.length; i++) {
		while (n % arr[i] === 0) {
			n = n / arr[i]
		}
	}
	return n == 1
}
// @lc code=end

export { isUgly }
