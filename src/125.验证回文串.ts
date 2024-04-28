/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
	// 输入: s = "A man, a plan, a canal: Panama"
	// 输出：true
	// 解释："amanaplanacanalpanama" 是回文串。

	// 先处理s
	s = s
		.trim()
		.toLocaleLowerCase()
		.replaceAll(/[^a-zA-Z0-9]/g, '')

	let left = 0
	let right = s.length - 1

	while (left <= right) {
		if (s[left] !== s[right]) {
			return false
		} else {
			left++
			right--
		}
	}

	return true
}
// @lc code=end
export { isPalindrome }
