/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start

function reverse(s: string[], i: number, j: number) {
	let left = i
	let right = j

	// console.log(s.slice(i, j + 1))

	while (left < right) {
		let t = s[left]
		s[left] = s[right]
		s[right] = t

		left++
		right--
	}
}
function reverseWords(s: string): string {
	// 输入：s = "the sky is blue"
	// 输出："blue is sky the"

	// 处理str
	// 去除首尾空格
	let str = s.trim()

	// 反转str
	let arr = str.split('')
	reverse(arr, 0, arr.length - 1)

	// console.log(arr)

	let slow = 0
	let fast = 0

	// abc

	while (fast <= arr.length) {
		if (arr[fast] === ' ' || fast === arr.length) {
			// word slow -> fast
			reverse(arr, slow, fast - 1)
			fast++
			slow = fast

			// 这里slow 需要找到下一个非空 位置
			while (slow < arr.length && arr[slow] === ' ') {
				arr.splice(slow, 1)
			}
		} else {
			fast++
		}
	}

	return arr.join('')
}
// @lc code=end
export { reverseWords }
