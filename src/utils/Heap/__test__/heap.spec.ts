import { Heap } from '../index'
import { describe, test, expect } from 'bun:test'

describe('Heap', () => {
	test('should insert values into the heap', () => {
		const heap = new Heap((a, b) => a - b)
		heap.insert(5)
		heap.insert(3)
		heap.insert(8)
		expect(heap.size()).toBe(3)
		expect(heap.top()).toBe(3)
	})

	test('should extract root value from the heap', () => {
		const heap = new Heap((a, b) => a - b, [3, 5, 8])
		const root = heap.extractRoot()
		expect(root).toBe(3)
		expect(heap.size()).toBe(2)
		expect(heap.top()).toBe(5)
	})

	test('should sort values using heap sort', () => {
		const heap = new Heap((a, b) => a - b, [8, 3, 5])
		const sorted = heap.sort()
		expect(sorted).toEqual([3, 5, 8])
	})

	test('should heapify an array of values', () => {
		const values = [8, 3, 5]
		const heap = Heap.heapify(values, (a, b) => a - b)
		expect(heap.size()).toBe(3)
		expect(heap.top()).toBe(3)
	})

	test('should verify if a heap is valid', () => {
		const heap = new Heap((a, b) => a - b, [3, 5, 8])
		expect(heap.isValid()).toBe(true)
	})

	// Add more test cases covering other methods and edge cases
})
