import { sortingAlgorithms } from './sorting-algorithms/sorting-algorithms.js'

export function recordSwaps(sortType, arrayToSort) {
	const animations = []
	sortingAlgorithms[sortType](arrayToSort, (_, i, j) => animations.push([i, j]))

	return animations
}
