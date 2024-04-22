import { pathInZigZagTree } from '@/1104.二叉树寻路'
import { describe, expect, it } from 'bun:test'

describe('1104.二叉树寻路', () => {
	it('pathInZigZagTree: 14', () => {
		expect(pathInZigZagTree(14)).toEqual([1, 3, 4, 14])
	})
	it('pathInZigZagTree: 26', () => {
		expect(pathInZigZagTree(26)).toEqual([1, 2, 6, 10, 26])
	})
})
