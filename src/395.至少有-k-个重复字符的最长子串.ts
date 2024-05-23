/*
 * @lc app=leetcode.cn id=395 lang=typescript
 *
 * [395] 至少有 K 个重复字符的最长子串
 */

// @lc code=start
function longestSubstring(s: string, k: number): number {
	// 输入：s = "aaabb", k = 3
	// 输出：3
	// 解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。
	//
	// 输入：s = "ababbc", k = 2
	// 输出：5
	// 解释：最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。

	// s中 有count种字符 至少出现k次
	let len = 0
	for (let i = 1; i <= 26; i++) {
		len = Math.max(len, longestSubstringHasCount(s, k, i))
	}

	function longestSubstringHasCount(
		s: string,
		k: number,
		count: number
	): number {
		// 扩大：少于count种字符
		// 缩小：多于count种字符
		// 预期答案：窗口内所有字符种类出现次数都大于等于k

		const window = new Map()

		let left = 0
		let right = 0

		let hasCount = 0 // 有count种字符
		let hasValid = 0 // 至少出现k次

		let len = 0

		while (right < s.length) {
			let add = s[right]
			right++

			window.set(add, (window.get(add) || 0) + 1)

			// 新增一种字符
			if (window.get(add) == 1) {
				hasCount++
			}

			// 该字符出现k次
			if (window.get(add) === k) {
				hasValid++
			}

			while (hasCount > count) {
				let remove = s[left]
				left++
				if (window.get(remove) === k) {
					hasValid--
				}
				window.set(remove, window.get(remove) - 1)

				if (window.get(remove) === 0) {
					hasCount--
				}
			}

			// 当前所有count种字符出现次数都大于等于k
			if (hasValid === count) {
				len = Math.max(len, right - left)
			}
		}

		return len
	}

	return len
}
// @lc code=end
export { longestSubstring }
