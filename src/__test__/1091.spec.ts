import { shortestPathBinaryMatrix } from '@/1091.二进制矩阵中的最短路径'
import { describe, expect, it } from 'bun:test'
describe('shortestPathBinaryMatrix test', () => {
	it('shortestPathBinaryMatrix 1', () => {
		expect(
			shortestPathBinaryMatrix([
				[0, 0, 0],
				[1, 1, 0],
				[1, 1, 0],
			])
		).toBe(4)
	})

	it('shortestPathBinaryMatrix 2', () => {
		expect(
			shortestPathBinaryMatrix([
				[0, 1],
				[1, 0],
			])
		).toBe(2)
	})

	it('shortestPathBinaryMatrix 3', () => {
		expect(
			shortestPathBinaryMatrix([
				[1, 0, 0],
				[1, 1, 0],
				[1, 1, 0],
			])
		).toBe(-1)
	})

	it('shortestPathBinaryMatrix 测试超时', () => {
		expect(
			shortestPathBinaryMatrix([
				[0, 1, 1, 0, 0, 0],
				[0, 1, 0, 1, 1, 0],
				[0, 1, 1, 0, 1, 0],
				[0, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 0],
				[1, 1, 1, 1, 1, 0],
			])
		).toBe(14)
	})
})
