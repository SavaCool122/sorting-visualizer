/**
 * @param {number[]} inputArray
 * @param {(arr, i, j) => void} onSwap
 * @returns {number[]}
 */
export function shellSort(inputArray, onSwap = () => {}) {
	const arr = [...inputArray]
	let gap = Math.floor(arr.length / 2)

	while (gap > 0) {
		for (let i = gap; i < arr.length; i++) {
			for (let j = i; j >= gap && arr[j - gap] > arr[j]; j -= gap) {
				;[arr[j], arr[j - gap]] = [arr[j - gap], arr[j]]
				onSwap(arr.slice(), j, j - gap)
			}
		}
		gap = Math.floor(gap / 2)
	}

	return arr
}
