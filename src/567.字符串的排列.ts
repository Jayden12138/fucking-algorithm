/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
	// 输入：s1 = "ab" s2 = "eidbaooo"
	// 输出：true
	// 解释：s2 包含 s1 的排列之一 ("ba").
	//
	// 输入：s1= "ab" s2 = "eidboaoo"
	// 输出：false

	const need = new Map()
	const window = new Map()

	for (let i = 0; i < s1.length; i++) {
		need.set(s1[i], (need.get(s1[i]) || 0) + 1)
	}

	let left = 0
	let right = 0

	let valid = 0
	let start = 0
	let len = Infinity

	while (right < s2.length) {
		let add = s2[right]
		right++

		if (need.has(add)) {
			window.set(add, (window.get(add) || 0) + 1)
			if (need.get(add) === window.get(add)) {
				valid++
			}
		}
		while (valid === need.size) {
			if (right - left < len) {
				start = left
				len = right - left
			}

			let remove = s2[left]
			left++

			if (need.has(remove)) {
				if (window.get(remove) === need.get(remove)) {
					valid--
				}
				window.set(remove, window.get(remove) - 1)
			}
		}
	}

	return !(len === Infinity || len != s1.length)
}
// @lc code=end
export { checkInclusion }
