class DMaxPQ {
	private _heap: number[]
	constructor() {
		// 初始化最大堆
		// index:0 位置不使用
		this._heap = [0]
	}

	size() {
		return this._heap.length - 1
	}

	// 获取父节点的索引
	getParentIndex(i: number): number {
		return Math.floor(i / 2)
	}

	// 获取左子节点的索引
	getLeftChildIndex(i: number): number {
		return 2 * i
	}

	// 获取右子节点的索引
	getRightChildIndex(i: number): number {
		return 2 * i + 1
	}

	// 返回最大的元素
	max() {
		return this._heap[1]
	}

	// 插入元素
	insert(value: number) {
		this._heap.push(value)
		this.swim(this.size())
	}

	// 删除并返回当前队列中最大元素
	delMax() {
		this.swap(1, this.size())
		const max = this._heap.pop()
		this.sink(1)
		return max
	}

	// 上浮第x个元素 以维护最大堆性质
	swim(x: number) {
		while (x > 1 && this.isLess(this.getParentIndex(x), x)) {
			this.swap(x, this.getParentIndex(x))
			x = this.getParentIndex(x)
		}
	}

	// 下沉第x个元素 以维护最大堆性质
	sink(x: number) {
		while (this.getLeftChildIndex(x) <= this.size()) {
			let max = this.getLeftChildIndex(x)
			if (
				this.getRightChildIndex(x) <= this.size() &&
				this.isLess(max, this.getRightChildIndex(x))
			) {
				max = this.getRightChildIndex(x)
			}

			if (this.isLess(max, x)) {
				break
			}

			this.swap(x, max)
			x = max
		}
	}

	swap(i: number, j: number) {
		;[this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]]
	}

	// _heap[i] 是否小于 _heap[j]
	isLess(i: number, j: number) {
		return this._heap[i] < this._heap[j]
	}
}

export { DMaxPQ }
