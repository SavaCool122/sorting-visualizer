let pivots

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let j = i
		let currentElement = arr[i]
		while (currentElement < arr[j - 1]) {
			arr[j] = arr[j - 1]
			j--
		}
		arr[j] = currentElement
	}

	return arr
}

const handler = {
	apply: function (target, thisArg, argumentsList) {
		return thisArg[target].apply(this, argumentsList)
	},
	deleteProperty: function (target, property) {
		console.log('Deleted %s', property)
		return true
	},
	set: function (target, property, value, receiver) {
		target[property] = value
		pivots.push([Number(property), value])
		return true
	},
}

function getInsertionSortAnimations(arr) {
	pivots = []
	arr = new Proxy(arr, handler)
	insertionSort(arr)
	return pivots
}

export default getInsertionSortAnimations
