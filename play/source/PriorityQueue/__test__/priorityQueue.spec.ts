import { PriorityBlockingQueue } from '../index'
import { describe, expect, beforeEach, test } from 'bun:test'

describe('PriorityBlockingQueue', () => {
	let queue: PriorityBlockingQueue<number>

	beforeEach(() => {
		queue = new PriorityBlockingQueue<number>()
	})

	test('add elements with priority and take them in order', () => {
		queue.add(5, 2)
		queue.add(7, 1)
		queue.add(3, 3)

		expect(queue.take()).toBe(7)
		expect(queue.take()).toBe(5)
		expect(queue.take()).toBe(3)
	})

	test('peek returns the highest priority element without removing it', () => {
		queue.add(5, 2)
		queue.add(7, 1)
		queue.add(3, 3)

		expect(queue.peek()).toBe(7)
		expect(queue.size()).toBe(3)
	})

	test('size returns the number of elements in the queue', () => {
		queue.add(5, 2)
		queue.add(7, 1)
		queue.add(3, 3)

		expect(queue.size()).toBe(3)
	})

	test('clear removes all elements from the queue', () => {
		queue.add(5, 2)
		queue.add(7, 1)
		queue.add(3, 3)
		queue.clear()

		expect(queue.size()).toBe(0)
	})
})
