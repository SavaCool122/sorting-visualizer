import { createRecordSwap } from '../proxy-wrapper.js'

function mergeSort(arr, start = 0, end = arr.length - 1) {
	if (start < end) {
		const middle = Math.floor((start + end) / 2)
		mergeSort(arr, start, middle)
		mergeSort(arr, middle + 1, end)
		merge(arr, start, middle, end)
	}
}

function merge(arr, start, middle, end) {
	let start2 = middle + 1

	// If the direct merge is already sorted
	if (arr[middle] <= arr[start2]) {
		return
	}

	// Two pointers to maintain start of both parts to merge
	while (start <= middle && start2 <= end) {
		// If element 1 is in right place
		if (arr[start] <= arr[start2]) {
			start++
		} else {
			let value = arr[start2]
			let index = start2

			// Shift all the elements between element 1
			// element 2, right by 1.
			while (index !== start) {
				swap(arr, index, index - 1)
				index--
			}
			arr[start] = value

			// Update all the pointers
			start++
			middle++
			start2++
		}
	}
}

let animations = []
const recordSwap = createRecordSwap(animations)

function swap(arr, index1, index2) {
	recordSwap(index1, index2, (i, j) => {
		const temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	})
}

export function getMergeSortAnimations(array) {
	mergeSort(array)
	return animations
}
