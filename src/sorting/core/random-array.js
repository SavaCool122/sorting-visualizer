import config from '../lib/config.js'
import { randomIntFromInterval } from './random-int-from-interval.js'

export function randomArray(length, options = {}) {
	const { min = config.arrayLength.min, max = config.arrayLength.max } = options
	return Array.from({ length }, () => randomIntFromInterval(min, max))
}
