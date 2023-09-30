import { proxyWrapper } from '../utils'

function selectionSort(arr) {
	let swap = 0

	for (let i = 0; i < arr.length - 1; i++) {
		let index = i

		for (let j = i + 1; j < arr.length; j++) if (arr[j] < arr[index]) index = j

		swap = arr[i]
		arr[i] = arr[index]
		arr[index] = swap
	}
	return arr
}

let pivots

export function getSelectionSortAnimations(arr) {
	pivots = []
	arr = proxyWrapper(arr, pivots)
	selectionSort(arr)
	return pivots
}
