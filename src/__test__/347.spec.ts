import { topKFrequent } from '@/347.前-k-个高频元素'
import { describe, expect, it } from 'bun:test'

describe('347.前-k-个高频元素', () => {
	it.only('topKFrequent: [1,1,1,2,2,3], k = 2', () => {
		expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
	})

	it('topKFrequent: [1], k = 1', () => {
		expect(topKFrequent([1], 1)).toEqual([1])
	})
})
