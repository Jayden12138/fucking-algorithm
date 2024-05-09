/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
	// 输入: s = "cbaebabacd", p = "abc"
	// 输出: [0,6]
	//
	// 输入: s = "abab", p = "ab"
	// 输出: [0,1,2]

	const res: number[] = []

	const need = new Map()
	for (let i = 0; i < p.length; i++) {
		need.set(p[i], (need.get(p[i]) || 0) + 1)
	}
	const window = new Map()

	let valid = 0
	let left = 0
	let right = 0

	while (right < s.length) {
		let add = s[right]
		right++
		if (need.has(add)) {
			window.set(add, (window.get(add) || 0) + 1)
			if (need.get(add) === window.get(add)) {
				valid++
			}
		}

		while (right - left >= p.length) {
			if (valid === need.size) {
				res.push(left)
			}
			let remove = s[left]
			left++

			if (need.has(remove)) {
				if (need.get(remove) === window.get(remove)) {
					valid--
				}
				window.set(remove, window.get(remove) - 1)
			}
		}
	}

	return res
}
// @lc code=end
export { findAnagrams }
