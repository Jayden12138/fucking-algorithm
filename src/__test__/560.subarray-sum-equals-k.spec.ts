import { subarraySum } from '../560.subarray-sum-equals-k'
import { describe, expect, it } from 'bun:test'
describe('560. Subarray Sum Equals K', () => {
	it('subarraySum', () => {
		expect(subarraySum([1, 1, 1], 2)).toBe(2)
	})
})
