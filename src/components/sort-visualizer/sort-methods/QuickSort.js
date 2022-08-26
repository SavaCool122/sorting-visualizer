let counter = 0

function partition(items, low, hi) {
	let pivotIdx = Math.floor((hi + low) / 2)
	let pivot = items[pivotIdx]
	while (low <= hi) {
		while (items[low] < pivot) {
			low++
		}
		while (items[hi] > pivot) {
			hi--
		}
		if (low <= hi) {
			//swap
			counter += 1
			const temp = items[low]
			items[low] = items[hi]
			items[hi] = temp
			//swap end
			low++
			hi--
		}
	}
	return low
}

function quickSort(items, low = 0, hi = items.length - 1) {
	if (low < hi) {
		const index = partition(items, low, hi)
		quickSort(items, low, index - 1)
		quickSort(items, index, hi)
	}
	return items
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
let pivots = []

export default function getQuickSortAnimations(items) {
	pivots = []
	items = new Proxy(items, handler)
	if (items.length <= 1) return items
	quickSort(items)
	return pivots
}
