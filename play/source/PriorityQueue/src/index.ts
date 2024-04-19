class PriorityQueueNode<E> {
	value: E
	priority: number

	constructor(value: E, priority: number) {
		this.value = value
		this.priority = priority
	}
}

class PriorityBlockingQueue<E> {
	private queue: PriorityQueueNode<E>[]

	constructor() {
		this.queue = []
	}

	add(value: E, priority: number): void {
		const newNode = new PriorityQueueNode(value, priority)
		this.queue.push(newNode)
		this.queue.sort((a, b) => a.priority - b.priority)
	}

	take(): E | undefined {
		return this.queue.shift()?.value
	}

	peek(): E | undefined {
		return this.queue.length ? this.queue[0].value : undefined
	}

	size(): number {
		return this.queue.length
	}

	clear(): void {
		this.queue = []
	}
}

export { PriorityBlockingQueue }
