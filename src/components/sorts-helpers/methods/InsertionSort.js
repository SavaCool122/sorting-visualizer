import { proxyWrapper } from '../utils'

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let j = i
		let currentElement = arr[i]
		while (currentElement < arr[j - 1]) {
			arr[j] = arr[j - 1]
			j--
		}
		arr[j] = currentElement
	}

	return arr
}

let pivots

function getInsertionSortAnimations(arr) {
	pivots = []
	arr = proxyWrapper(arr, pivots)
	insertionSort(arr)
	return pivots
}

export default getInsertionSortAnimations
