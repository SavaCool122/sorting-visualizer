import { MAX_ARRAY_LENGTH, MIN_ARRAY_LENGTH } from './constants.js'
import { randomIntFromInterval } from './random-int-from-interval.js'

export function randomArray(length, options = {}) {
	const { min = MIN_ARRAY_LENGTH, max = MAX_ARRAY_LENGTH } = options
	return Array.from({ length }, () => randomIntFromInterval(min, max))
}
