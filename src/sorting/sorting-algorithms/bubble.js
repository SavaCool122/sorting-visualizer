/**
 * @param {number[]} inputArray
 * @param {(arr, i, j) => void} onSwap
 * @returns {number[]}
 */
export function bubbleSort(inputArray, onSwap = () => {}) {
	const arr = [...inputArray]
	const n = arr.length

	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
				onSwap(arr, j, j + 1)
			}
		}
	}

	return arr
}
