import { sortingAlgorithms } from './sorting-algorithms/sorting-algorithms.js'

export function recordSwaps(sortType, arrayToSort) {
	const animations = []
	sortingAlgorithms[sortType](arrayToSort, array => animations.push(array))
	return animations
}
