/**
 * @param {number[]} inputArray
 * @param {(arr, i, j) => void} onSwap
 * @returns {number[]}
 */
export function cocktailShakerSort(inputArray, onSwap = () => {}) {
	const arr = [...inputArray]

	let start = 0
	let end = arr.length - 1
	let swapped = true

	while (swapped) {
		swapped = false

		for (let i = start; i < end; i++) {
			if (arr[i] > arr[i + 1]) {
				;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
				onSwap(arr.slice(), i, i + 1)
				swapped = true
			}
		}

		if (!swapped) {
			break
		}

		swapped = false
		end--

		for (let i = end; i > start; i--) {
			if (arr[i - 1] > arr[i]) {
				;[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
				onSwap(arr.slice(), i - 1, i)
				swapped = true
			}
		}

		start++
	}

	return arr
}
