import { findClosestElements } from '@/658.找到-k-个最接近的元素'
import { describe, expect, it } from 'bun:test'
import { MinPriorityQueue } from '@datastructures-js/priority-queue'

describe('658.找到-k-个最接近的元素', () => {
	it('findClosestElements: [1,2,3,4,5], k = 4, x = 3', () => {
		expect(findClosestElements([1, 2, 3, 4, 5], 4, 3)).toEqual([1, 2, 3, 4])
	})
})
