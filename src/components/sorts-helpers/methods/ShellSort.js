import { proxyWrapper } from '../utils'

function shellSort(arr) {
	let iterations = 0,
		comparisons = 0,
		writes = 0

	for (let d = arr.length / 2; d >= 1; d /= 2) {
		iterations++

		let step = Math.floor(d)

		for (let i = 0; i < arr.length; i += step) {
			iterations++

			let j = i - step
			while (j >= 0 && arr[j] > arr[j + step]) {
				iterations++
				writes++
				comparisons++

				const temp = arr[j]
				arr[j] = arr[j + step]
				arr[j + step] = temp
				j -= step
			}
		}
	}
}

let pivots = []

export function getShellSortAnimations(items) {
	pivots = []
	items = proxyWrapper(items, pivots)
	if (items.length <= 1) return items
	shellSort(items)
	return pivots
}
