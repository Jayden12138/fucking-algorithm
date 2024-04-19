/*
 * @lc app=leetcode.cn id=752 lang=typescript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
function openLock(deadends: string[], target: string): number {
	// 输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
	// 输出：6
	// 解释：
	// 可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
	// 注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
	// 因为当拨动到 "0102" 时这个锁就会被锁定。

	// 输入: deadends = ["8888"], target = "0009"
	// 输出：1
	// 解释：把最后一位反向旋转一次即可 "0000" -> "0009"。

	// 输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
	// 输出：-1
	// 解释：无法旋转到目标数字且不被锁定。

	let deads = new Set(deadends)

	if (target === '0000') return 0
	if (deads.has('0000')) return -1

	// +1
	function forword(str: string, i: number) {
		let arr = str.split('')
		if (arr[i] === '9') {
			arr[i] = '0'
		} else {
			arr[i] = parseInt(arr[i]) + 1 + ''
		}
		return arr.join('')
	}

	// -1
	function backword(str: string, i: number) {
		let arr = str.split('')
		if (arr[i] === '0') {
			arr[i] = '9'
		} else {
			arr[i] = parseInt(arr[i]) - 1 + ''
		}
		return arr.join('')
	}

	let str = '0000'

	// target: '4000'
	// 0000 1000 2000 3000 4000

	/**
	 *
	 * 每一位都有两个选择 +1 和 -1
	 *
	 * target 0202
	 *
	 * [0, 0, 0, 0]
	 * [0, 1, 0, 0] [0, 9, 0, 0]
	 *
	 *
	 */

	let step = 0

	let queue = new Set<string>()
	let queue2 = new Set<string>()
	let visited = new Set<string>()

	queue.add(str)

	queue2.add(target)

	while (queue.size && queue2.size) {
		let temp = new Set<string>()

		for (const cur of queue) {
			if (deads.has(cur)) continue

			//
			if (queue2.has(cur)) return step

			visited.add(cur)

			//
			for (let j = 0; j < cur.length; j++) {
				let forwardStr = forword(cur, j)
				if (!visited.has(forwardStr)) {
					temp.add(forwardStr)
				}

				let backwordStr = backword(cur, j)
				if (!visited.has(backwordStr)) {
					temp.add(backwordStr)
				}
			}
		}

		queue = queue2
		queue2 = temp

		step++
	}

	return -1
}
// @lc code=end
export { openLock }
