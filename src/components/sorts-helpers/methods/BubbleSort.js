import { proxyWrapper } from '../utils'

function bubbleSort(arr) {
	swapped = false
	let end = arr.length - 1
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			swapped = true
			let temp = arr[i]
			arr[i] = arr[i + 1]
			arr[i + 1] = temp
		}
	}
	end--
}

let swapped
let pivots = []

export function getBubbleSortAnimations(arr) {
	pivots = []
	arr = proxyWrapper(arr, pivots)
	do {
		bubbleSort(arr)
	} while (swapped)
	return pivots
}
