import config from '../config.js'
import { randomIntFromInterval } from './randomIntFromInterval.js'

export function randomArray(length, options = {}) {
	const { min = config.arrayLength.min, max = config.arrayLength.max } = options
	return Array.from({ length }, () => randomIntFromInterval(min, max))
}
