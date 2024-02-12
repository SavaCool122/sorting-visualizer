import config from '../config'
import { randomIntFromInterval } from './randomIntFromInterval'

export function randomArray(length, options = {}) {
	const { min = config.arrayLength.min, max = config.arrayLength.max } = options
	return Array.from({ length }, () => randomIntFromInterval(min, max))
}
