import { permute } from '@/46.全排列'
import { describe, expect, it } from 'bun:test'

describe('first', () => {
	it('permute', () => {
		expect(permute([1, 2, 3])).toEqual([
			[1, 2, 3],
			[1, 3, 2],
			[2, 1, 3],
			[2, 3, 1],
			[3, 1, 2],
			[3, 2, 1],
		])
	})
})
