import { proxyWrapper } from '../proxyWrapper.js'

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
		const temp = arr[parentIdx]
		arr[parentIdx] = arr[largest]
		arr[largest] = temp

		heapify(arr, length, largest)
	}
	return arr
}

function heapSort(arr) {
	let length = arr.length
	let lastParentNode = Math.floor(length / 2 - 1)
	let lastChild = length - 1

	while (lastParentNode >= 0) {
		heapify(arr, length, lastParentNode)
		lastParentNode--
	}

	while (lastChild >= 0) {
		const temp = arr[0]
		arr[0] = arr[lastChild]
		arr[lastChild] = temp
		heapify(arr, lastChild, 0)
		lastChild--
	}
}

let pivots = []

export function getHeapSortAnimations(list) {
	pivots = []
	list = proxyWrapper(list, pivots)
	heapSort(list)
	return pivots
}
