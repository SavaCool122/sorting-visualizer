import { SORT_TYPE } from './sort-type.js'
import { getQuickSortAnimations } from './sorting-algorithms/quick.js'
import { getMergeSortAnimations } from './sorting-algorithms/merge.js'
import { getBubbleSortAnimations } from './sorting-algorithms/bubble.js'
import { getShellSortAnimations } from './sorting-algorithms/shell-sort.js'
import { getSelectionSortAnimations } from './sorting-algorithms/selection.js'
import { getInsertionSortAnimations } from './sorting-algorithms/insertion.js'
import { getHeapSortAnimations } from './sorting-algorithms/heap.js'
import { getCocktailShakerSortAnimations } from './sorting-algorithms/cocktail-shaker.js'

function sortingAlgorithmsAnimationFabric() {
	const sortingAlgorithms = {}

	return {
		register(sortType, sortingAlgorithm) {
			sortingAlgorithms[sortType] = sortingAlgorithm
		},
		recordAnimation(sortType, list) {
			return sortingAlgorithms[sortType](list.slice())
		},
	}
}

export const sortingAlgorithmsFabric = sortingAlgorithmsAnimationFabric()

sortingAlgorithmsFabric.register(SORT_TYPE.QUICK, getQuickSortAnimations)
sortingAlgorithmsFabric.register(SORT_TYPE.MERGE, getMergeSortAnimations)
sortingAlgorithmsFabric.register(SORT_TYPE.BUBBLE, getBubbleSortAnimations)
sortingAlgorithmsFabric.register(SORT_TYPE.SHELL, getShellSortAnimations)
sortingAlgorithmsFabric.register(SORT_TYPE.SELECTION, getSelectionSortAnimations)
sortingAlgorithmsFabric.register(SORT_TYPE.INSERTION, getInsertionSortAnimations)
sortingAlgorithmsFabric.register(SORT_TYPE.HEAP, getHeapSortAnimations)
sortingAlgorithmsFabric.register(SORT_TYPE.COCKTAIL_SHAKER, getCocktailShakerSortAnimations)
