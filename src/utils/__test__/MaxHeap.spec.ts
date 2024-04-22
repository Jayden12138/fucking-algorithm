import { DMaxPQ } from '@/utils'
import { describe, it, expect } from 'bun:test'

// by chatgpt
describe('DMaxPQ', () => {
	it('should return correct size', () => {
		const pq = new DMaxPQ()
		pq.insert(10)
		pq.insert(20)
		expect(pq.size()).toBe(2)
	})

	it('should return max element', () => {
		const pq = new DMaxPQ()
		pq.insert(10)
		pq.insert(20)
		expect(pq.max()).toBe(20)
	})

	it('should remove and return the max element', () => {
		const pq = new DMaxPQ()
		pq.insert(10)
		pq.insert(20)
		const removedMax = pq.delMax()
		expect(removedMax).toBe(20)
		expect(pq.max()).toBe(10)
	})

	it('should maintain max heap property after multiple insertions', () => {
		const pq = new DMaxPQ()
		pq.insert(10)
		pq.insert(20)
		pq.insert(5)
		pq.insert(30)
		expect(pq.max()).toBe(30)
	})

	it('should maintain max heap property after multiple deletions', () => {
		const pq = new DMaxPQ()
		pq.insert(10)
		pq.insert(20)
		pq.insert(5)
		pq.insert(30)
		pq.delMax()
		expect(pq.max()).toBe(20)
		pq.delMax()
		expect(pq.max()).toBe(10)
	})

	// TODO: 这里暂时不需要边缘异常处理（在算法中使用的话输入输出都应该在期望中）
	// it('should throw an error when deleting from an empty heap', () => {
	// 	const pq = new DMaxPQ()
	// 	expect(() => pq.delMax()).toThrow()
	// })

	it('should swap correctly', () => {
		const pq = new DMaxPQ()
		pq.insert(10)
		pq.insert(20)
		pq.swap(1, 2)
		expect(pq.max()).toBe(10)
	})

	it('should handle edge case of a heap with one element', () => {
		const pq = new DMaxPQ()
		pq.insert(10)
		pq.delMax()
		expect(pq.size()).toBe(0)
	})
})
