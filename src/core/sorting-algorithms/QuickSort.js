import { proxyWrapper } from '../proxyWrapper.js'

function partition(items, low, hi) {
	let pivotIdx = Math.floor((hi + low) / 2)
	let pivot = items[pivotIdx]
	while (low <= hi) {
		while (items[low] < pivot) {
			low++
		}
		while (items[hi] > pivot) {
			hi--
		}
		if (low <= hi) {
			//swap
			counter += 1
			const temp = items[low]
			items[low] = items[hi]
			items[hi] = temp
			//swap end
			low++
			hi--
		}
	}
	return low
}

function quickSort(items, low = 0, hi = items.length - 1) {
	if (low < hi) {
		const index = partition(items, low, hi)
		quickSort(items, low, index - 1)
		quickSort(items, index, hi)
	}
	return items
}

let pivots = []
let counter = 0

export function getQuickSortAnimations(items) {
	pivots = []
	items = proxyWrapper(items, pivots)
	if (items.length <= 1) return items
	quickSort(items)
	return pivots
}
