import { SORT_TYPE } from './constants'
import { getQuickSortAnimations } from './methods/QuickSort'
import { getMergeSortAnimations } from './methods/MergeSort'
import { getBubbleSortAnimations } from './methods/BubbleSort'
import { getShellSortAnimations } from './methods/ShellSort'
import { getSelectionSortAnimations } from './methods/SelectionSort'
import { getInsertionSortAnimations } from './methods/InsertionSort'
import { getHeapSortAnimations } from './methods/HeapSort'
import { getCocktailShakerSortAnimations } from './methods/CocktailShaker'

function sortingAlgorithmsAnimationFabric() {
	const sortingAlgorithms = {}

	function register(sortType, sortingAlgorithm) {
		sortingAlgorithms[sortType] = sortingAlgorithm
	}

	function createAnimation(sortType, list) {
		return sortingAlgorithms[sortType](list.slice())
	}

	return {
		sortingAlgorithms,
		register,
		createAnimation,
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
