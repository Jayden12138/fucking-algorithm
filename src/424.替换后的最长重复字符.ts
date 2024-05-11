/*
 * @lc app=leetcode.cn id=424 lang=typescript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
function characterReplacement(s: string, k: number): number {
	// 输入：s = "AABABBA", k = 1
	// 输出：4

	const window = new Map()

	// 扩大窗口 可替换次数 > 0
	// 缩小窗口 可替换次数 < 0
	// 预期答案 可替换次数 > 0 都是符合条件的

	// 除了出现最多次的，之外的次数之和

	let left = 0
	let right = 0
	let len = 0

	let maxShowCount = 0

	while (right < s.length) {
		let add = s[right]
		right++

		window.set(add, (window.get(add) || 0) + 1)

		maxShowCount = Math.max(maxShowCount, window.get(add))

		while (right > left && right - left - maxShowCount > k) {
			let remove = s[left]
			left++

			if (window.get(remove) === 1) {
				window.delete(remove)
			} else {
				window.set(remove, window.get(remove) - 1)
			}
		}

		len = Math.max(len, right - left)
	}

	return len
}
// @lc code=end
export { characterReplacement }
