import { combinationSum3 } from '../../216.组合总和-iii'

describe('first', () => {
	it('combinationSum3', () => {
		expect(combinationSum3(3, 9)).toEqual([
			[1, 2, 6],
			[1, 3, 5],
			[2, 3, 4],
		])
	})

	it('combinationSum3', () => {
		expect(combinationSum3(4, 1)).toEqual([])
	})
})
