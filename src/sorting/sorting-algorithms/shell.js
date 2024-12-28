/**
 * @param {number[]} inputArray
 * @param {(arr, i, j) => void} onSwap
 * @returns {number[]}
 */
export function shellSort(inputArray, onSwap = () => {}) {
	const arr = [...inputArray]
	const n = arr.length

	let gap = Math.floor(n / 2)

	while (gap > 0) {
		for (let i = gap; i < n; i++) {
			const current = arr[i]
			let j = i

			while (j >= gap && arr[j - gap] > current) {
				arr[j] = arr[j - gap]
				onSwap(arr, j, j - gap)
				j -= gap
			}
			arr[j] = current
		}
		gap = Math.floor(gap / 2)
	}

	return arr
}
