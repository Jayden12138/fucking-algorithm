import { coinChange } from '../../322.零钱兑换'

describe('322.零钱兑换', () => {
	it('coinChange', () => {
		// expect(coinChange([1, 2, 5], 11)).toBe(3)
		// expect(coinChange([2], 3)).toBe(-1)
		expect(coinChange([2], 3)).toBe(-1)
	})

	it('暴力解 超时', () => {
		expect(coinChange([1, 2, 5], 100)).toBe(20)
	})

	it('添加备忘录1 超时', () => {
		expect(coinChange([186, 419, 83, 408], 6249)).toBe(20)

		expect(coinChange([474, 83, 404, 3], 264)).toBe(8)
	})
})
