import { MAX_ARRAY_LENGTH, MAX_ARRAY_NUM, MIN_ARRAY_NUM } from './constants.js'
import { pickFirstElements } from './pick-first-elements.js'
import { randomIntFromInterval } from './random-int-from-interval.js'
import { rangeArray } from './range-array.js'
import { shuffle } from './shuffle.js'

export function randomArray(length, options = {}) {
	const { min = MIN_ARRAY_NUM, max = MAX_ARRAY_NUM } = options
	return Array.from({ length }, () => randomIntFromInterval(min, max))
}

export function randomUniqueArray() {
	const array = rangeArray()
	const shuffledArray = shuffle(array)
	return pickFirstElements(shuffledArray, MAX_ARRAY_LENGTH)
}
