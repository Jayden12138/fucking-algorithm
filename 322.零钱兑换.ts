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
	let memos: number[] = new Array(amount + 1).fill(-999)

	function dp(coins: number[], amount: number): number {
		// [1, 2, 5] 11
		if (amount == 0) return 0
		if (amount < 0) return -1

		if (memos[amount] !== -999) {
			return memos[amount]
		}

		let res = Infinity

		for (let i = 0; i < coins.length; i++) {
			let subProblem = dp(coins, amount - coins[i])
			if (subProblem == -1) continue
			res = Math.min(subProblem + 1, res)
		}

		memos[amount] = res === Infinity ? -1 : res

		return memos[amount]
	}

	return dp(coins, amount)
}

// @lc code=end
export { coinChange }
