class MaxHeap {
	private heap: number[]

	constructor() {
		this.heap = []
	}

	// 获取父节点的索引
	private getParentIndex(index: number): number {
		return Math.floor((index - 1) / 2)
	}

	// 获取左子节点的索引
	private getLeftChildIndex(index: number): number {
		return 2 * index + 1
	}

	// 获取右子节点的索引
	private getRightChildIndex(index: number): number {
		return 2 * index + 2
	}

	// 交换数组中的两个元素
	private swap(index1: number, index2: number): void {
		;[this.heap[index1], this.heap[index2]] = [
			this.heap[index2],
			this.heap[index1],
		]
	}

	// 向上调整（上浮）元素，维护最大堆的性质
	private heapifyUp(index: number): void {
		let currentIndex = index
		while (
			currentIndex > 0 &&
			this.heap[currentIndex] >
				this.heap[this.getParentIndex(currentIndex)]
		) {
			this.swap(currentIndex, this.getParentIndex(currentIndex))
			currentIndex = this.getParentIndex(currentIndex)
		}
	}

	// 向下调整（下沉）元素，维护最大堆的性质
	private heapifyDown(index: number): void {
		let currentIndex = index
		while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
			const leftChildIndex = this.getLeftChildIndex(currentIndex)
			const rightChildIndex = this.getRightChildIndex(currentIndex)
			let maxIndex = leftChildIndex

			if (
				rightChildIndex < this.heap.length &&
				this.heap[rightChildIndex] > this.heap[leftChildIndex]
			) {
				maxIndex = rightChildIndex
			}

			if (this.heap[currentIndex] >= this.heap[maxIndex]) {
				break
			}

			this.swap(currentIndex, maxIndex)
			currentIndex = maxIndex
		}
	}

	// 插入元素到最大堆
	insert(value: number): void {
		this.heap.push(value)
		this.heapifyUp(this.heap.length - 1)
	}

	// 删除并返回最大堆中的最大元素
	extractMax(): number | undefined {
		if (this.heap.length === 0) {
			return undefined
		}

		if (this.heap.length === 1) {
			return this.heap.pop()
		}

		const max = this.heap[0]
		this.heap[0] = this.heap.pop()!
		this.heapifyDown(0)

		return max
	}

	// 返回最大堆中的最大元素但不删除
	peek(): number | undefined {
		return this.heap[0]
	}

	// 返回最大堆的大小
	size(): number {
		return this.heap.length
	}

	// 判断最大堆是否为空
	isEmpty(): boolean {
		return this.heap.length === 0
	}
}

export { MaxHeap }
