import {SortTypes} from '../enums/enums'
import getQuickSortAnimations from "../QuickSort"
import getBubbleSortAnimations from "../BubbleSort"
import getSelectionSortAnimations from '../SelectionSort'
import getInsertionSortAnimations from '../InsertionSort'
import getMergeSortAnimations from '../MergeSort'
import getShellSortAnimations from '../ShellSort'
import getHeapSortAnimations from "../HeapSort"
import getCocktailShakerSortAnimations from "../CocktailShaker"

export const ANIMATION_SPEED = 15

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