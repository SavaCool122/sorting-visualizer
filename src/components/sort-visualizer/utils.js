import sortMethodsMap from './sort-methods'

export function randomIntFromInterval(min = 50, max = 100) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getSortMethods(type) {
	const sortMethod = sortMethodsMap[type]
	if (!sortMethod) throw new Error("Sort don't found")
	return sortMethod
}

export function getRandomArray(length, options = {}) {
	const { min = 25, max = 200 } = options
	return Array.from({ length }, () => randomIntFromInterval(min, max))
}

export function getInitialAppConfig() {
	return {
		status: null,
		sort: null,
	}
}
