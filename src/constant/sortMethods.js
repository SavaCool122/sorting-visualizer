import { getMergeSortAnimations } from "../utils/MergeSort";
import { getQuickSortAnimations } from "../utils/QuickSort";

const sortHandlers = {
  mergeSortHandler: getMergeSortAnimations,
  quickSortHandler: getQuickSortAnimations,
};

export default sortHandlers;
