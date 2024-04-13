import { subsets } from '../../78.子集'

describe('first', () => {
	it('subsets', () => {
		expect(subsets([1, 2, 3])).toEqual([
			[],
			[1],
			[2],
			[1, 2],
			[3],
			[1, 3],
			[2, 3],
			[1, 2, 3],
		])
	})
})
