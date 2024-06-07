import { SORT_TYPE } from './state/sort-type.js'
import { getQuickSortAnimations } from './sorting-algorithms/quick.js'
import { getMergeSortAnimations } from './sorting-algorithms/merge.js'
import { getBubbleSortAnimations } from './sorting-algorithms/bubble.js'
import { getShellSortAnimations } from './sorting-algorithms/shell.js'
import { getSelectionSortAnimations } from './sorting-algorithms/selection.js'
import { getInsertionSortAnimations } from './sorting-algorithms/insertion.js'
import { getHeapSortAnimations } from './sorting-algorithms/heap.js'
import { getCocktailShakerSortAnimations } from './sorting-algorithms/cocktail-shaker.js'

const sortingAlgorithms = new Map([
	[SORT_TYPE.QUICK, getQuickSortAnimations],
	[SORT_TYPE.MERGE, getMergeSortAnimations],
	[SORT_TYPE.BUBBLE, getBubbleSortAnimations],
	[SORT_TYPE.SHELL, getShellSortAnimations],
	[SORT_TYPE.SELECTION, getSelectionSortAnimations],
	[SORT_TYPE.INSERTION, getInsertionSortAnimations],
	[SORT_TYPE.HEAP, getHeapSortAnimations],
	[SORT_TYPE.COCKTAIL_SHAKER, getCocktailShakerSortAnimations],
])

export function recordAnimation(sortType, list) {
	return sortingAlgorithms.get(sortType)(list.slice())
}
