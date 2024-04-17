import { createRecordSwap } from '../record-swap.js'

function heapify(arr, length, parentIdx) {
	let largest = parentIdx
	let left = parentIdx * 2 + 1
	let right = left + 1

	if (left < length && arr[left] > arr[largest]) {
		largest = left
	}

	if (right < length && arr[right] > arr[largest]) {
		largest = right
	}

	if (largest !== parentIdx) {
		swap(arr, parentIdx, largest) // Using swap function here
		heapify(arr, length, largest)
	}
	return arr
}

function heap(arr) {
	let length = arr.length
	let lastParentNode = Math.floor(length / 2 - 1)
	let lastChild = length - 1

	while (lastParentNode >= 0) {
		heapify(arr, length, lastParentNode)
		lastParentNode--
	}

	while (lastChild >= 0) {
		swap(arr, 0, lastChild) // Using swap function here
		heapify(arr, lastChild, 0)
		lastChild--
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

export function getHeapSortAnimations(list) {
	heap(list)
	return animations
}
