import { search } from '../../704.二分查找'

describe('704.二分查找', () => {
	it('search 1', () => {
		expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4)
	})

	it('search 2', () => {
		expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
	})
})
