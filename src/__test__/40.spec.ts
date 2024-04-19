import { combinationSum2 } from '@/40.组合总和-ii'
import { describe, expect, it } from 'bun:test'

describe('first', () => {
	it('combinationSum2', () => {
		expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).toEqual([
			[1, 1, 6],
			[1, 2, 5],
			[1, 7],
			[2, 6],
		])
	})
})
