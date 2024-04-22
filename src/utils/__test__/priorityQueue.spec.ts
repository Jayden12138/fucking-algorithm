import { MaxHeap, DMaxPQ } from '@/utils'
import { describe, expect, it } from 'bun:test'

describe('priorityQueue', () => {
	it('MaxHeap', () => {
		const maxHeap = new MaxHeap()
		maxHeap.insert(5)
		maxHeap.insert(3)
		maxHeap.insert(10)
		maxHeap.insert(8)
		maxHeap.insert(1)
		// [10, 8, 5, 3, 1]
		/**
		 *           10
		 *          /   \
		 *         8     5
		 *        / \
		 *       3   1
		 */
		expect(maxHeap.extractMax()).toBe(10)
		expect(maxHeap.peek()).toBe(8)
		expect(maxHeap.size()).toBe(4)
		expect(maxHeap.isEmpty()).toBe(false)
	})

	it('DMaxPQ', () => {
		const maxHeap = new DMaxPQ()
		maxHeap.insert(5)
		maxHeap.insert(3)
		maxHeap.insert(10)
		maxHeap.insert(8)
		maxHeap.insert(1)
		// [10, 8, 5, 3, 1]
		/**
		 *           10
		 *          /   \
		 *         8     5
		 *        / \
		 *       3   1
		 */
		expect(maxHeap.delMax()).toBe(10)
		expect(maxHeap.max()).toBe(8)
		expect(maxHeap.size()).toBe(4)
	})
})
