/**
 * @param {number[]} inputArray
 * @param {(arr, i, j) => void} onSwap
 * @returns {number[]}
 */
export function insertionSort(inputArray, onSwap = () => {}) {
	const arr = [...inputArray]

	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
			;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
			onSwap(arr.slice(), j, j - 1)
		}
	}

	return arr
}
