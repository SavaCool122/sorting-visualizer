/**
 * @param {number[]} inputArray
 * @param {(arr, i, j) => void} onSwap
 * @returns {number[]}
 */
function mergeSort(inputArray, onSwap = () => {}) {
	if (inputArray.length < 2) {
		return [...inputArray]
	}

	const middle = Math.floor(inputArray.length / 2)
	const leftPart = inputArray.slice(0, middle)
	const rightPart = inputArray.slice(middle)

	const sortedLeft = mergeSort(leftPart, onSwap)
	const sortedRight = mergeSort(rightPart, onSwap)

	return mergeArrays(sortedLeft, sortedRight, onSwap)
}

function mergeArrays(leftArr, rightArr, onSwap) {
	const result = []
	let i = 0
	let j = 0

	while (i < leftArr.length && j < rightArr.length) {
		if (leftArr[i] <= rightArr[j]) {
			result.push(leftArr[i])
			i++
		} else {
			result.push(rightArr[j])
			onSwap(result, j, i)
			j++
		}
	}

	while (i < leftArr.length) {
		result.push(leftArr[i])
		i++
	}
	while (j < rightArr.length) {
		result.push(rightArr[j])
		j++
	}

	return result
}
