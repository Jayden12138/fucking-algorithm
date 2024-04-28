/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
	// 输入：s = "babad"
	// 输出："bab"
	// 解释："aba" 同样是符合题意的答案。
	// 1 <= s.length <= 1000
	//
	// 最长 -> 从中心向两边扩散
	// 回文子串 中点： 基数 -> 中间 偶数 -> 中间两个
	let res = ''
	for (let i = 0; i < s.length; i++) {
		let s1 = palindrome(s, i, i)
		if (s1.length > res.length) {
			res = s1
		}

		let s2 = palindrome(s, i, i + 1)

		if (s2.length > res.length) {
			res = s2
		}
	}

	function palindrome(s: string, i: number, j: number) {
		let left = i
		let right = j
		while (left >= 0 && right < s.length && s[left] == s[right]) {
			left--
			right++
		}
		return s.slice(left + 1, right)
	}

	return res
}
// @lc code=end
export { longestPalindrome }
