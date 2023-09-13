import { sortMethodsConfig } from './sorts-helpers/sortMethodsConfig'
import { MIN_ARRAY_LENGTH, MAX_ARRAY_LENGTH } from './constants'

export const delay = (time = 0) => new Promise(resolve => setTimeout(resolve, time))

export function randomIntFromInterval(min = 0, max = 1) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getSortMethods(type) {
	const sortMethod = sortMethodsConfig[type]
	if (!sortMethod) throw new Error("Sort don't found")
	return sortMethod
}

export function getRandomArray(length, options = {}) {
	const { min = MIN_ARRAY_LENGTH, max = MAX_ARRAY_LENGTH } = options
	return Array.from({ length }, () => randomIntFromInterval(min, max))
}
