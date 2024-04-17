export function createRecordSwap(animation = []) {
	return function recordSwap(first, second, sortFn) {
		animation.push([first, second])
		sortFn(first, second)
	}
}

export function filterSameValues(list) {
	return list.filter(([first, second]) => first !== second)
}
