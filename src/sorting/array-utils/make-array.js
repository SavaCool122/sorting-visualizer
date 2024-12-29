import { randomUniqueArray } from './random-array.js'

export function makeArray(type) {
	if (type === 'random') return randomUniqueArray()
	if (type === 'reversed') return randomUniqueArray().sort((a, b) => b - a)
	return randomUniqueArray()
}
