import { createRecordSwap, proxyWrapper } from '../proxy-wrapper.js'

function bubble(arr) {
	swapped = false
	let end = arr.length - 1
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			swapped = true
			swap(arr, i, i + 1)
		}
	}
	end--
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

let swapped

export function getBubbleSortAnimations(arr) {
	do {
		bubble(arr)
	} while (swapped)
	return animations
}
