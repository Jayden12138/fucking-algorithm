import { updateMatrix } from '@/542.01-矩阵'
import { describe, expect, it } from 'bun:test'
describe('updateMatrix test', () => {
	it('updateMatrix', () => {
		expect(
			updateMatrix([
				[0, 0, 0],
				[0, 1, 0],
				[0, 0, 0],
			])
		).toEqual([
			[0, 0, 0],
			[0, 1, 0],
			[0, 0, 0],
		])
	})

	it('updateMatrix 2', () => {
		expect(
			updateMatrix([
				[0, 0, 0],
				[0, 1, 0],
				[1, 1, 1],
			])
		).toEqual([
			[0, 0, 0],
			[0, 1, 0],
			[1, 2, 1],
		])
	})

	it('7/50', () => {
		expect(
			updateMatrix([
				[0, 1, 0, 1, 1],
				[1, 1, 0, 0, 1],
				[0, 0, 0, 1, 0],
				[1, 0, 1, 1, 1],
				[1, 0, 0, 0, 1],
			])
		).toEqual([
			[0, 1, 0, 1, 2],
			[1, 1, 0, 0, 1],
			[0, 0, 0, 1, 0],
			[1, 0, 1, 1, 1],
			[1, 0, 0, 0, 1],
		])
	})
})
