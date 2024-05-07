import { productExceptSelf } from '@/238.除自身以外数组的乘积'
import { it, expect, describe } from 'bun:test'

describe('238.除自身以外数组的乘积', () => {
	it('productExceptSelf: [1,2,3,4]', () => {
		expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6])
	})

	it('productExceptSelf: [-1,1,0,-3,3]', () => {
		expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0])
	})
})
