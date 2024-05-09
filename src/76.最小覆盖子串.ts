/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
	// 输入：s = "ADOBECODEBANC", t = "ABC"
	// 输出："BANC"
	// 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。

	const needMap = new Map()
	const windowMap = new Map()

	for (let i = 0; i < t.length; i++) {
		needMap.set(t[i], (needMap.get(t[i]) || 0) + 1)
	}

	let left = 0
	let right = 0

	let valid = 0

	let start = 0
	let len = Infinity

	while (right < s.length) {
		let willAdd = s[right]
		right++
		// update valid
		if (needMap.has(willAdd)) {
			// update window
			windowMap.set(willAdd, (windowMap.get(willAdd) || 0) + 1)
			if (windowMap.get(willAdd) === needMap.get(willAdd)) {
				valid++
			}
		}

		while (valid === needMap.size) {
			if (right - left < len) {
				start = left
				len = right - left
			}
			// need shake
			let willRemove = s[left]
			left++
			// update valid
			if (needMap.has(willRemove)) {
				// update window
				if (windowMap.get(willRemove) === needMap.get(willRemove)) {
					valid--
				}
				windowMap.set(willRemove, windowMap.get(willRemove) - 1)
			}
		}
	}

	return len === Infinity ? '' : s.slice(start, start + len)
}

// @lc code=end
export { minWindow }
