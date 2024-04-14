export function proxyWrapper(items, pivots) {
	const handler = {
		set: function (target, property, value) {
			target[property] = value
			pivots.push([Number(property), value])
			return true
		},
	}

	return new Proxy(items, handler)
}

export function createRecordSwap(animation = []) {
	return function recordSwap(first, second, sortFn) {
		animation.push([first, second])
		sortFn(first, second)
	}
}

export function filterSameValues(list) {
	return list.filter(([first, second]) => first !== second)
}
