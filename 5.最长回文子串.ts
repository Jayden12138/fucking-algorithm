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

	/**
	 * 奇/偶
	 *
	 * 从中间向两边扩散
	 *
	 *
	 * cabbad
	 *
	 */

	let l = s.length
	let res = ''

	// 查询以i为中心的回文串
	function findLondestPalindrome(s, i, j) {
		/**
		 *
		 * babab
		 *
		 * 2
		 *
		 * left 2 right 2
		 * l 5
		 *
		 * left 1 right 3
		 * left 0 right 4
		 * left -1 right 5
		 *
		 *
		 */
		let left = i
		let right = j

		let l = s.length

		while (left >= 0 && right < l) {
			if (s[left] === s[right]) {
				left--
				right++
			} else {
				break
			}
		}

		return s.slice(left + 1, right)
	}

	for (let i = 0; i < l; i++) {
		let s1 = findLondestPalindrome(s, i, i)
		res = res.length > s1.length ? res : s1
		let s2 = findLondestPalindrome(s, i, i + 1)
		res = res.length > s2.length ? res : s2
	}

	return res
}
// @lc code=end
