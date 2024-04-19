/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
	// 输入：s = ["h","e","l","l","o"]
	// 输出：["o","l","l","e","h"]
	/**
	 *
	 *
	 */

	let left = 0
	let right = s.length - 1

	while (left < right) {
		let t = s[left]
		s[left] = s[right]
		s[right] = t

		left++
		right--
	}
}
// @lc code=end
