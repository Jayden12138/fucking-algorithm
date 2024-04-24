import { kSmallestPairs } from '@/373.查找和最小的-k-对数字'
import { describe, expect, it } from 'bun:test'

describe('373.查找和最小的-k-对数字', () => {
	it('kSmallestPairs:[1,7,11],[2,4,6] k = 3', () => {
		// [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
		expect(kSmallestPairs([1, 7, 11], [2, 4, 6], 3)).toEqual([
			[1, 2],
			[1, 4],
			[1, 6],
		])
	})

	// it('kSmallestPairs: [1,1,2],[1,2,2] k = 2', () => {
	// 	// [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
	// 	expect(kSmallestPairs([1, 1, 2], [1, 2, 2], 2)).toEqual([
	// 		[1, 1],
	// 		[1, 1],
	// 	])
	// })
})
