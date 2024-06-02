import { createRecordSwap } from '../animations/record-swap.js'

function insertion(arr) {
	for (let i = 1; i < arr.length; i++) {
		let j = i
		while (j > 0 && arr[j] < arr[j - 1]) {
			swap(arr, j, j - 1)
			j--
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

export function getInsertionSortAnimations(arr) {
	insertion(arr)
	return animations
}
