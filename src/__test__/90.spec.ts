import { subsetsWithDup } from '../../90.子集-ii'

describe('first', () => {
	it('subsetsWithDup', () => {
		expect(subsetsWithDup([1, 2, 2])).toEqual([
			[],
			[1],
			[1, 2],
			[1, 2, 2],
			[2],
			[2, 2],
		])
	})

	it('15/20 [4,4,4,1,4]', () => {
		expect(subsetsWithDup([4, 4, 4, 1, 4])).toEqual([
			[],
			[1],
			[1, 4],
			[1, 4, 4],
			[1, 4, 4, 4],
			[4],
			[4, 4],
			[4, 4, 4],
			[4, 4, 4, 4],
		])
	})
})
