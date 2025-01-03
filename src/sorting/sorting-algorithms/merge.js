/**
 * @param {number[]} inputArray
 * @param {(arr, i, j) => void} onSwap
 * @returns {number[]}
 */
export function mergeSort(inputArray, onSwap = () => {}) {
	const arr = [...inputArray]

	function sort(left, right) {
		if (left < right) {
			const mid = Math.floor((left + right) / 2)
			sort(left, mid)
			sort(mid + 1, right)
			merge(left, mid, right)
		}
	}

	function merge(start, mid, end) {
		let start2 = mid + 1
		if (arr[mid] <= arr[start2]) return
		while (start <= mid && start2 <= end) {
			if (arr[start] <= arr[start2]) {
				start++
			} else {
				const value = arr[start2]
				let index = start2
				while (index > start) {
					;[arr[index], arr[index - 1]] = [arr[index - 1], arr[index]]
					onSwap(arr.slice(), index, index - 1)
					index--
				}
				arr[start] = value
				start++
				mid++
				start2++
			}
		}
	}

	sort(0, arr.length - 1)
	return arr
}
