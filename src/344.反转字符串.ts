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
	// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
	// 输入：s = ["h","e","l","l","o"]
	// 输出：["o","l","l","e","h"]

	// 双指针 交换
	let left = 0
	let right = s.length - 1

	while (left <= right) {
		;[s[left], s[right]] = [s[right], s[left]]

		left++
		right--
	}
}
// @lc code=end
export { reverseString }
