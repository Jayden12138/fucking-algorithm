class DMaxPQ {
	private _heap: number[]
	constructor() {
		this._heap = [0]
	}

	size(): number {
		return this._heap.length - 1
	}

	// 获取父节点的索引
	getParentIndex(i: number): number {
		// [0, 10, 8, 5, 3, 1]
		// i:0  1  2  3  4  5
		// 5 -> i == 3 -> parent: 3/2 -> i = 1 -> 10
		// 3 -> i == 4 -> parent: 4/2 -> i = 2 -> 8
		/**
		 *           10
		 *          /   \
		 *         8     5
		 *        / \
		 *       3   1
		 */
		return Math.floor(i / 2)
	}

	// 获取左子节点的索引
	getLeftChildIndex(i: number): number {
		// [0, 10, 8, 5, 3, 1]
		// i:0  1  2  3  4  5
		// 10 -> i == 1 -> leftChildIdx  1 * 2 => i == 2 -> 8
		/**
		 *           10
		 *          /   \
		 *         8     5
		 *        / \
		 *       3   1
		 */
		return i * 2
	}

	// 获取右子节点的索引
	getRightChildIndex(i: number): number {
		return i * 2 + 1
	}

	// 返回最大的元素
	max(): number {
		return this._heap[1]
	}

	// 插入元素
	insert(value: number) {
		// 1. 队尾插入新元素
		this._heap.push(value)
		// 2. 上浮该元素
		this.swim(this.size())
	}

	// 删除并返回当前队列中最大元素
	delMax(): number {
		// 1. 交换最大值(index == 1)、队尾
		this.swap(1, this.size())

		// 2. 删除最大值(当前在队尾)
		let curMax = this._heap.pop()!

		// 3. 下沉(index == 1) === 重排当前队列
		this.sink(1)

		return curMax
	}

	// 上浮第x个元素 以维护最大堆性质
	swim(x: number) {
		// 一直上浮到最大值处(i == 1)停止 且当前值比其父级值大
		while (x > 1 && this.isLess(this.getParentIndex(x), x)) {
			// 1. 交换两值
			this.swap(x, this.getParentIndex(x))
			// 2. 指针指向父级，进行下一次的上浮判断
			x = this.getParentIndex(x)
		}
	}

	// 下沉第x个元素 以维护最大堆性质
	sink(x: number) {
		// 需要和左、右两个节点进行对比
		// 默认：左子节点 值大于 父级
		// 这里需要一直下沉到队尾 且 左子节点存在（因为默认左子节点大于父级）
		while (x < this.size() && this.getLeftChildIndex(x) <= this.size()) {
			// 1. 默认左子节点 最大（在三者：父级、左子节点、右子节点中）
			let max = this.getLeftChildIndex(x)

			// 2. 判断右子节点
			if (
				this.getRightChildIndex(x) < this.size() &&
				this.isLess(max, this.getRightChildIndex(x))
			) {
				// 右子节点存在 且 大于max
				// 交换
				max = this.getRightChildIndex(x)
			}

			// 3. 左右节点较大者 max 和 父级进行对比
			if (this.isLess(max, x)) {
				// 如果两子节点都小于父级，则跳过当前
				break
			}

			// 左右节点中较大者 比父级 大
			// 交换
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
