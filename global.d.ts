import { describe, expect, it, jest } from 'bun:test'

declare global {
	var describe: typeof describe
	var expect: typeof expect
	var it: typeof it
	var jest: typeof jest
}
