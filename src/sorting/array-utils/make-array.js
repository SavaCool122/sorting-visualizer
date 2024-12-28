import { MAX_ARRAY_LENGTH } from './constants.js'
import { randomUniqueArray } from './random-array.js'

export function makeArray(type) {
	if (type === 'random') return randomUniqueArray(MAX_ARRAY_LENGTH)
	if (type === 'reversed') return randomUniqueArray(MAX_ARRAY_LENGTH).sort((a, b) => b - a)
	// if (type === 'few-unique') return fewUnique(MAX_ARRAY_LENGTH)
	return randomUniqueArray(MAX_ARRAY_LENGTH)
}
