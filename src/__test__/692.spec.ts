import { topKFrequent } from '@/692.前k个高频单词'
import { describe, expect, it } from 'bun:test'

describe('692.前k个高频单词', () => {
	it('topKFrequent: ["i", "love", "leetcode", "i", "love", "coding"], k = 2', () => {
		expect(
			topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2)
		).toEqual(['i', 'love'])
	})

	it('topKFrequent: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4', () => {
		expect(
			topKFrequent(
				[
					'the',
					'day',
					'is',
					'sunny',
					'the',
					'the',
					'the',
					'sunny',
					'is',
					'is',
				],
				4
			)
		).toEqual(['the', 'is', 'sunny', 'day'])
	})
})
