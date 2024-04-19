import { combine } from '@/77.组合'
import { describe, expect, it } from 'bun:test'

describe('first', () => {
	it('combine', () => {
		expect(combine(4, 2)).toEqual([
			[1, 2],
			[1, 3],
			[1, 4],
			[2, 3],
			[2, 4],
			[3, 4],
		])
	})
})
