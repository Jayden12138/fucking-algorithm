// 仓库管理员以数组 stock 形式记录商品库存表，其中 stock[i] 表示对应商品库存余量。请返回库存余量最少的 cnt 个商品余量，返回 顺序不限。
// 示例 1：

// 输入：stock = [2,5,7,4], cnt = 1
// 输出：[2]
// 示例 2：

// 输入：stock = [0,2,3,6], cnt = 2
// 输出：[0,2] 或 [2,0]

// 提示：
// 0 <= cnt <= stock.length <= 10000
// 	0 <= stock[i] <= 10000

import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

function inventoryManagement(arr: number[], k: number): number[] {
	// const dp = new MinPriorityQueue()
	// let res:number[] = []

	// stock.forEach(num => {
	//     dp.enqueue(num)
	// })

	// for(let i = 0;i<cnt;i++){
	//     res.push(dp.dequeue())
	// }

	// return res

	// 大顶堆，堆顶是最大元素
	let pq = new MaxPriorityQueue()
	for (let e of arr) {
		// 每个元素都要过一遍二叉堆
		pq.enqueue(e)
		// 堆中元素多于 k 个时，删除堆顶元素
		if (pq.size() > k) {
			pq.dequeue()
		}
	}
	// pq 中剩下的是 arr 中最小的 k 个元素
	let res = new Array(k)
	let i = 0
	while (pq.size() > 0) {
		res[i] = pq.dequeue().element
		i++
	}
	return res
}
export { inventoryManagement }
