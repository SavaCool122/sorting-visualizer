import { createRecordSwap, filterSameValues } from '../proxy-wrapper.js'

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		const pivotIndex = partition(arr, left, right)
		quickSort(arr, left, pivotIndex - 1) // Sort left subarray
		quickSort(arr, pivotIndex + 1, right) // Sort right subarray
	}
	return arr
}

function partition(arr, left, right) {
	const pivot = arr[right] // Choose the rightmost element as pivot
	let i = left - 1

	for (let j = left; j < right; j++) {
		if (arr[j] < pivot) {
			i++
			swap(arr, i, j)
		}
	}

	swap(arr, i + 1, right) // Place the pivot element in its correct position
	return i + 1 // Return the pivot index
}

const animations = []
const recordSwap = createRecordSwap(animations)

function swap(arr, i, j) {
	recordSwap(i, j, (i, j) => {
		const temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	})
}

export function getQuickSortAnimations(items) {
	const r = quickSort(items)
	console.log(r)
	return filterSameValues(animations)
}
