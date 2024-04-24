/*
 * @lc app=leetcode.cn id=692 lang=typescript
 *
 * [692] 前K个高频单词
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue'

// @lc code=start
function topKFrequent(words: string[], k: number): string[] {
	// 输入: words = ["i", "love", "leetcode", "i", "love", "coding"], k = 2
	// 输出: ["i", "love"]
	// 解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
	//     注意，按字母顺序 "i" 在 "love" 之前。
	//
	//     输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
	//     输出: ["the", "is", "sunny", "day"]
	//     解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
	//         出现次数依次为 4, 3, 2 和 1 次。

	const wordMap = new Map()

	words.forEach(word => {
		if (wordMap.has(word)) {
			wordMap.set(word, wordMap.get(word) + 1)
		} else {
			wordMap.set(word, 0)
		}
	})

	const pq = new MinPriorityQueue({
		priority: p => p[1],
		compare: (a, b) => {
			if (a[1] === b[1]) {
				return b[0].localeCompare(a[0])
			} else {
				return a[1] - b[1]
			}
		},
	})

	for (const o of wordMap) {
		pq.enqueue(o)
		if (pq.size() > k) {
			pq.dequeue()
		}
	}

	return pq
		.toArray()
		.map(o => o[0])
		.reverse()
}
// @lc code=end
export { topKFrequent }
