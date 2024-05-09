/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
	// 输入: s = "abcabcbb"
	// 输出: 3
	//
	// 输入: s = "pwwkew"
	// 输出: 3
	// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
	//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

	let left = 0
	let right = 0
	let res = 0

	const window = new Map()

	while (right < s.length) {
		let add = s[right]
		right++

		window.set(add, (window.get(add) || 0) + 1)

		while (window.get(add) > 1) {
			let remove = s[left]
			left++
			window.set(remove, window.get(remove) - 1)
		}

		res = Math.max(res, right - left)
	}

	return res
}

// @lc code=end
export { lengthOfLongestSubstring }
