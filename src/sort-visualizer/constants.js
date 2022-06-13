import getQuickSortAnimations from "./sort-methods/QuickSort"
import getBubbleSortAnimations from "./sort-methods/BubbleSort"
import getSelectionSortAnimations from './sort-methods/SelectionSort'
import getInsertionSortAnimations from './sort-methods/InsertionSort'
import getMergeSortAnimations from './sort-methods/MergeSort'
import getShellSortAnimations from './sort-methods/ShellSort'
import getHeapSortAnimations from "./sort-methods/HeapSort"
import getCocktailShakerSortAnimations from "./sort-methods/CocktailShaker"

export const Colors = {
  PRIMARY_COLOR: "#E0DFD5",
  SECONDARY_COLOR: "#e43f5a",
  SELECT_COLOR: "yellowgreen",
  PIVOT_COLOR: "#35d0ba",
}

export const SortTypes = {
  QUICK: 'QUICK',
  MERGE: 'MERGE',
  BUBBLE: 'BUBBLE',
  SELECTION: 'SELECTION',
  INSERTION: 'INSERTION',
  HEAP: 'HEAP',
  SHELL: 'SHELL',
  COCKTAIL_SHAKER: 'COCKTAIL_SHAKER',
  BITONIC: 'BITONIC'
}

export const ANIMATION_SPEED = 1

export const sortingList = [
  {
    id: SortTypes.QUICK,
    name: "Quick Sort",
    handler: getQuickSortAnimations,
    disabled: false,
  },
  {
    id: SortTypes.MERGE,
    name: "Merge Sort",
    handler: getMergeSortAnimations,
    disabled: false,
  },
  {
    id: SortTypes.BUBBLE,
    name: "Bubble Sort",
    handler: getBubbleSortAnimations,
    disabled: false,
  },
  {
    id: SortTypes.SELECTION,
    name: "Selection Sort",
    handler: getSelectionSortAnimations,
    disabled: false,
  },
  {
    id: SortTypes.INSERTION,
    name: "Insertion Sort",
    handler: getInsertionSortAnimations,
    disabled: false,
  },
  {
    id: SortTypes.SHELL,
    name: "Shell Sort",
    handler: getShellSortAnimations,
    disabled: false,
  },
  {
    id: SortTypes.HEAP,
    name: "Heap Sort",
    handler: getHeapSortAnimations,
    disabled: false,
  },
  {
    id: SortTypes.COCKTAIL_SHAKER,
    name: "Shaker Sort",
    handler: getCocktailShakerSortAnimations,
    disabled: false,
  },
  {
    id: 10,
    name: "Another Sort",
    disabled: true,
  },
  {
    id: 11,
    name: "Another Sort",
    disabled: true,
  },
]
