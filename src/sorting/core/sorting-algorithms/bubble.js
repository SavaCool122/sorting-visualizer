/**
 * @param {number[]} inputArray
 * @param {(arr, i, j) => void} onSwap
 * @returns {number[]}
 */
function bubbleSort(inputArray, onSwap = () => {}) {
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

export function getBubbleSortAnimations(arrayToSort) {
	const animations = []
	bubbleSort(arrayToSort, (_, i, j) => animations.push(i, j))
	return animations
}
