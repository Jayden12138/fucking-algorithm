/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
	// 输入：x = 121
	// 输出：true
	let str = String(x)
	let newStr = str.split('').reverse().join('')
	return newStr === str
}
// @lc code=end
export { isPalindrome }
