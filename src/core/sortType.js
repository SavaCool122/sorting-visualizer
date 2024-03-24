export const SORT_TYPE = {
	QUICK: 'QUICK',
	MERGE: 'MERGE',
	BUBBLE: 'BUBBLE',
	SELECTION: 'SELECTION',
	INSERTION: 'INSERTION',
	HEAP: 'HEAP',
	SHELL: 'SHELL',
	COCKTAIL_SHAKER: 'COCKTAIL_SHAKER',
}

export const SORT_TYPE_LABEL = {
	[SORT_TYPE.QUICK]: 'Quick Sort',
	[SORT_TYPE.MERGE]: 'Merge Sort',
	[SORT_TYPE.BUBBLE]: 'Bubble Sort',
	[SORT_TYPE.SHELL]: 'Shell Sort',
	[SORT_TYPE.SELECTION]: 'Selection Sort',
	[SORT_TYPE.INSERTION]: 'Insertion Sort',
	[SORT_TYPE.HEAP]: 'Heap Sort',
	[SORT_TYPE.COCKTAIL_SHAKER]: 'Shaker Sort',
}

/** @type {string[]} */
export const SORT_TYPE_LIST = Object.keys(SORT_TYPE)
