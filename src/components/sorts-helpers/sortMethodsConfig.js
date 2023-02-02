import { SORT_TYPES } from '../constants'
import getQuickSortAnimations from './methods/QuickSort'
import getMergeSortAnimations from './methods/MergeSort'
import getBubbleSortAnimations from './methods/BubbleSort'
import getSelectionSortAnimations from './methods/SelectionSort'
import getInsertionSortAnimations from './methods/InsertionSort'
import getShellSortAnimations from './methods/ShellSort'
import getHeapSortAnimations from './methods/HeapSort'
import getCocktailShakerSortAnimations from './methods/CocktailShaker'

const sortMethodMap = {
	[SORT_TYPES.QUICK]: getQuickSortAnimations,
	[SORT_TYPES.MERGE]: getMergeSortAnimations,
	[SORT_TYPES.BUBBLE]: getBubbleSortAnimations,
	[SORT_TYPES.SELECTION]: getSelectionSortAnimations,
	[SORT_TYPES.INSERTION]: getInsertionSortAnimations,
	[SORT_TYPES.SHELL]: getShellSortAnimations,
	[SORT_TYPES.HEAP]: getHeapSortAnimations,
	[SORT_TYPES.COCKTAIL_SHAKER]: getCocktailShakerSortAnimations,
}

export default sortMethodMap
