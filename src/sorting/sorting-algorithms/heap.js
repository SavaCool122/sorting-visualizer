/**
 * @param {number[]} inputArray
 * @param {(arr, i, j) => void} onSwap
 * @returns {number[]}
 */
export function heapSort(inputArray, onSwap = () => {}) {
	const arr = [...inputArray]
	const n = arr.length

	function heapify(size, rootIndex) {
		let largest = rootIndex
		const leftChild = 2 * rootIndex + 1
		const rightChild = 2 * rootIndex + 2

		if (leftChild < size && arr[leftChild] > arr[largest]) {
			largest = leftChild
		}

		if (rightChild < size && arr[rightChild] > arr[largest]) {
			largest = rightChild
		}

		if (largest !== rootIndex) {
			;[arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]]
			onSwap(arr, rootIndex, largest)
			heapify(size, largest)
		}
	}

	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(n, i)
	}

	for (let i = n - 1; i > 0; i--) {
		;[arr[0], arr[i]] = [arr[i], arr[0]]
		onSwap(arr.slice(), 0, i)

		heapify(i, 0)
	}

	return arr
}
