import { nthUglyNumber } from '@/264.丑数-ii'
import { describe, expect, it } from 'bun:test'

describe('264.丑数-ii', () => {
	it('nthUglyNumber: 10', () => {
		expect(nthUglyNumber(10)).toBe(12)
	})

	it('nthUglyNumber: 1', () => {
		expect(nthUglyNumber(1)).toBe(1)
	})

	it('nthUglyNumber: 11', () => {
		expect(nthUglyNumber(11)).toBe(15)
	})
})
