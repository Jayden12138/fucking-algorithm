/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
	// 输入：coins = [1, 2, 5], amount = 11
	// 输出：3
	// 解释：11 = 5 + 5 + 1
	// 输入：coins = [2], amount = 3
	// 输出：-1

	// 自底向上

	/**
	 *
	 * dp0
	 * [0]
	 *
	 * dp0 dp1
	 * dp1 = min(dp0 + dp-1 + dp-4) + 1
	 * [0, 1]
	 *
	 *
	 * [2] 3
	 *
	 * [0, 4, 4]
	 *
	 *
	 */

	let dptbale: number[] = new Array(amount + 1).fill(amount + 1)

	dptbale[0] = 0

	for (let i = 1; i <= amount; i++) {
		// dptable[i]
		for (let j = 0; j < coins.length; j++) {
			// coins[j]
			let currentDp = i - coins[j]
			if (currentDp < 0) continue

			dptbale[i] = Math.min(1 + dptbale[i - coins[j]], dptbale[i])
		}
	}

	return dptbale[amount] === amount + 1 ? -1 : dptbale[amount]
}

// @lc code=end
export { coinChange }
