import { addNum } from '../index'
import { describe, expect, it } from 'bun:test'

describe('test', () => {
	it('addNum', () => {
		expect(addNum(1, 2)).toBe(3)
	})
})
