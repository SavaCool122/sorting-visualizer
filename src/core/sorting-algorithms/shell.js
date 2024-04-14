import { createRecordSwap } from '../proxy-wrapper.js'

function shell(arr) {
	for (let d = Math.floor(arr.length / 2); d > 0; d = Math.floor(d / 2)) {
		for (let i = d; i < arr.length; i++) {
			for (let j = i; j >= d && arr[j - d] > arr[j]; j -= d) {
				swap(arr, j, j - d) // Using swap function here
			}
		}
	}

	return arr
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

export function getShellSortAnimations(items) {
	shell(items)
	return animations
}
