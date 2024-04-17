import { createRecordSwap } from '../record-swap.js'

function cocktailShakerSort(arr) {
	let isSorted = true
	while (isSorted) {
		isSorted = false

		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				swap(arr, i, i + 1)
				isSorted = true
			}
		}

		if (!isSorted) break

		isSorted = false

		for (let j = arr.length - 1; j > 0; j--) {
			if (arr[j - 1] > arr[j]) {
				swap(arr, j - 1, j)
				isSorted = true
			}
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

export function getCocktailShakerSortAnimations(items) {
	cocktailShakerSort(items)
	return animations
}
