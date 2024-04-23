import { inventoryManagement } from '@/LCR/LCR 159. 库存管理 III'
import { describe, expect, it } from 'bun:test'

describe('LCR 159. 库存管理 III', () => {
	it('inventoryManagement: [2,5,7,4], 1', () => {
		expect(inventoryManagement([2, 5, 7, 4], 1)).toEqual([2])
	})
})
