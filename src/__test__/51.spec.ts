import { solveNQueens } from '../../51.n-皇后'

describe('first', () => {
	it('solveNQueens', () => {
		expect(solveNQueens(4)).toEqual([
			['.Q..', '...Q', 'Q...', '..Q.'],
			['..Q.', 'Q...', '...Q', '.Q..'],
		])
		// expect(solveNQueens(4)).toEqual([
		// 	[1, 3, 0, 2],
		// 	[2, 0, 3, 1],
		// ])
	})

	it('5 queens', () => {
		expect(solveNQueens(5)).toEqual([])
	})
})
