/**
 * @param {number[]} inputArray
 * @param {(arr, i, j) => void} onSwap
 * @returns {number[]}
 */
export function insertionSort(inputArray, onSwap = () => {}) {
	const arr = [...inputArray]

	for (let i = 1; i < arr.length; i++) {
		let j = i
		const current = arr[i]

		while (j > 0 && arr[j - 1] > current) {
			arr[j] = arr[j - 1]

			onSwap(arr, j, j - 1)
			j--
		}
		arr[j] = current
	}

	return arr
}
