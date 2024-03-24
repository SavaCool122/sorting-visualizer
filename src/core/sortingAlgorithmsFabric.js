import { SORT_TYPE } from './sortType.js'
import { getQuickSortAnimations } from './sorting-algorithms/QuickSort.js'
import { getMergeSortAnimations } from './sorting-algorithms/MergeSort.js'
import { getBubbleSortAnimations } from './sorting-algorithms/BubbleSort.js'
import { getShellSortAnimations } from './sorting-algorithms/ShellSort.js'
import { getSelectionSortAnimations } from './sorting-algorithms/SelectionSort.js'
import { getInsertionSortAnimations } from './sorting-algorithms/InsertionSort.js'
import { getHeapSortAnimations } from './sorting-algorithms/HeapSort.js'
import { getCocktailShakerSortAnimations } from './sorting-algorithms/CocktailShaker.js'

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
