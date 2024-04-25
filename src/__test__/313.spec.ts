import { nthSuperUglyNumber } from '@/313.超级丑数'
import { describe, expect, it } from 'bun:test'

describe('313.超级丑数', () => {
	it('nthSuperUglyNumber: 12 [2, 7, 13, 19]', () => {
		// [1,2,4,7,8,13,14,16,19,26,28,32]
		expect(nthSuperUglyNumber(12, [2, 7, 13, 19])).toBe(32)
	})

	it('nthSuperUglyNumber: 1 [2, 3, 5]', () => {
		// [1]
		expect(nthSuperUglyNumber(1, [2, 3, 5])).toBe(1)
	})
})
