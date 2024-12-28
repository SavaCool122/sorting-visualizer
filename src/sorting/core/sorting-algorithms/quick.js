/**
 * @param {number[]} inputArray
 * @param {(arr, i, j) => void} onSwap
 * @returns {number[]}
 */
function quickSort(inputArray, onSwap = () => {}) {
	const arr = [...inputArray]
	function partition(low, high) {
		const pivot = arr[high]
		let i = low - 1

		for (let j = low; j < high; j++) {
			if (arr[j] <= pivot) {
				i++
				if (i !== j) {
					;[arr[i], arr[j]] = [arr[j], arr[i]]
					onSwap(arr, i, j)
				}
			}
		}

		if (i + 1 !== high) {
			;[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
			onSwap(arr, i + 1, high)
		}

		return i + 1
	}

	function sort(low, high) {
		if (low < high) {
			const pivotIndex = partition(low, high)

			sort(low, pivotIndex - 1)
			sort(pivotIndex + 1, high)
		}
	}

	sort(0, arr.length - 1)
	return arr
}
