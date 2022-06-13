import {SortTypes} from "../constants";
import getQuickSortAnimations from "./QuickSort";
import getMergeSortAnimations from "./MergeSort";
import getBubbleSortAnimations from "./BubbleSort";
import getSelectionSortAnimations from "./SelectionSort";
import getInsertionSortAnimations from "./InsertionSort";
import getShellSortAnimations from "./ShellSort";
import getHeapSortAnimations from "./HeapSort";
import getCocktailShakerSortAnimations from "./CocktailShaker";

const sortMethodMap = {
  [SortTypes.QUICK]: getQuickSortAnimations,
  [SortTypes.MERGE]: getMergeSortAnimations,
  [SortTypes.BUBBLE]: getBubbleSortAnimations,
  [SortTypes.SELECTION]: getSelectionSortAnimations,
  [SortTypes.INSERTION]: getInsertionSortAnimations,
  [SortTypes.SHELL]: getShellSortAnimations,
  [SortTypes.HEAP]: getHeapSortAnimations,
  [SortTypes.COCKTAIL_SHAKER]: getCocktailShakerSortAnimations,
}

export default sortMethodMap
