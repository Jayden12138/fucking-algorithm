/*
 * @lc app=leetcode.cn id=1834 lang=typescript
 *
 * [1834] 单线程 CPU
 */
import { MinPriorityQueue } from '@datastructures-js/priority-queue'

// @lc code=start
function getOrder(tasks: number[][]): number[] {
	// 现有一个单线程 CPU ，同一时间只能执行 最多一项 任务，该 CPU 将会按照下述方式运行：
	// 如果 CPU 空闲，且任务队列中没有需要执行的任务，则 CPU 保持空闲状态。
	// 如果 CPU 空闲，但任务队列中有需要执行的任务，则 CPU 将会选择 执行时间最短 的任务开始执行。如果多个任务具有同样的最短执行时间，则选择下标最小的任务开始执行。
	// 一旦某项任务开始执行，CPU 在 执行完整个任务 前都不会停止。
	// CPU 可以在完成一项任务后，立即开始执行一项新任务。

	// 输入：tasks = [[1,2],[2,4],[3,2],[4,1]]
	// 输出：[0,2,3,1]
	// 解释：事件按下述流程运行：
	// - time = 1 ，任务 0 进入任务队列，可执行任务项 = {0}
	// - 同样在 time = 1 ，空闲状态的 CPU 开始执行任务 0 ，可执行任务项 = {}
	// - time = 2 ，任务 1 进入任务队列，可执行任务项 = {1}
	// - time = 3 ，任务 2 进入任务队列，可执行任务项 = {1, 2}
	// - 同样在 time = 3 ，CPU 完成任务 0 并开始执行队列中用时最短的任务 2 ，可执行任务项 = {1}
	// - time = 4 ，任务 3 进入任务队列，可执行任务项 = {1, 3}
	// - time = 5 ，CPU 完成任务 2 并开始执行队列中用时最短的任务 3 ，可执行任务项 = {1}
	// - time = 6 ，CPU 完成任务 3 并开始执行任务 1 ，可执行任务项 = {}
	// - time = 10 ，CPU 完成任务 1 并进入空闲状态

	// 输入：tasks = [[7,10],[7,12],[7,5],[7,4],[7,2]]
	// 输出：[4,3,2,0,1]

	// 先根据进入时间排序
	const taskList = tasks
		.slice(0)
		.map((o, index) => [...o, index])
		.sort((a, b) => a[0] - b[0])

	const pq = new MinPriorityQueue({
		compare: (a, b) => {
			if (a[1] === b[1]) {
				return a[2] - b[2]
			} else {
				return a[1] - b[1]
			}
		},
	})

	let time = 0
	let res = []
	let i = 0

	while (res.length < tasks.length) {
		if (!pq.isEmpty()) {
			let runTask = pq.dequeue()
			res.push(runTask[2])
			time += runTask[1]
		} else if (i < taskList.length && taskList[i][0] > time) {
			// 可能是因为时间还没到入队时间
			time = taskList[i][0]
		}
		// 把可以添加到pq的都添加
		while (taskList[i] && taskList[i][0] <= time) {
			// let curTask = taskList.shift()
			let curTask = taskList[i]
			pq.enqueue([...curTask])
			i++
		}
	}

	return res
}
// @lc code=end
export { getOrder }
