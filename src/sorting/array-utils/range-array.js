import { MAX_ARRAY_NUM, MIN_ARRAY_NUM } from './constants.js'

export function rangeArray() {
	return Array.from({ length: MAX_ARRAY_NUM - MIN_ARRAY_NUM + 1 }, (_, i) => MIN_ARRAY_NUM + i)
}
