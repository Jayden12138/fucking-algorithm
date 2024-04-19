import { combinationSum } from '@/39.组合总和'
import { describe, expect, it } from 'bun:test'

describe('first', () => {
	it('combinationSum', () => {
		expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]])
	})
})
