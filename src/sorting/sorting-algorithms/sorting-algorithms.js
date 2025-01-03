import { SortTypes } from '../constants.js'

import { quickSort } from './quick.js'
import { mergeSort } from './merge.js'
import { bubbleSort } from './bubble.js'
import { shellSort } from './shell.js'
import { selectionSort } from './selection.js'
import { insertionSort } from './insertion.js'
import { heapSort } from './heap.js'
import { cocktailShakerSort } from './cocktail-shaker.js'

export const sortingAlgorithms = {
	[SortTypes.quick]: quickSort,
	[SortTypes.merge]: mergeSort,
	[SortTypes.bubble]: bubbleSort,
	[SortTypes.select]: selectionSort,
	[SortTypes.insert]: insertionSort,
	[SortTypes.heap]: heapSort,
	[SortTypes.shell]: shellSort,
	[SortTypes.shaker]: cocktailShakerSort,
}
