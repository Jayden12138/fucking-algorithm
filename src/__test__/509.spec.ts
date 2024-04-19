import { fib } from '@/509.斐波那契数'
import { describe, expect, it } from 'bun:test'
describe('first', () => {
	it('fib', () => {
		expect(fib(2)).toBe(1)
		expect(fib(3)).toBe(2)
		expect(fib(4)).toBe(3)
	})
})
