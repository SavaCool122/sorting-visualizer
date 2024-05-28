import { createRecordSwap } from '../record-swap.js'

function selection(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let index = i

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[index]) {
				index = j
			}
		}

		if (index !== i) {
			swap(arr, i, index)
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

export function getSelectionSortAnimations(arr) {
	selection(arr)
	return animations
}
