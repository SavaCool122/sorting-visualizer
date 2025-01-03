/**
 * @param {number[]} inputArray
 * @param {(arr, i, j) => void} onSwap
 * @returns {number[]}
 */
export function selectionSort(inputArray, onSwap = () => {}) {
	const arr = [...inputArray]
	const n = arr.length

	for (let i = 0; i < n - 1; i++) {
		let minIndex = i
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}
		if (minIndex !== i) {
			;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
			onSwap(arr.slice(), i, minIndex)
		}
	}

	return arr
}
