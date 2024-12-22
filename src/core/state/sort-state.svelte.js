import { STATUS } from './status'

export function createState(sortTypeList, registrator) {
	let sortsState = $state(
		[...sortTypeList].map(sort => ({
			id: sort,
			status: STATUS.INITIAL,
		})),
	)

	function resetDefaultState() {
		setTimeout(() => {
			sortsState = sortsState.map(sort => ({ ...sort, status: STATUS.INITIAL }))
		}, 1000)
	}

	async function startAllSorts() {
		sortsState = sortsState.map(sort => ({ ...sort, status: STATUS.SORTING }))
		await registrator.runAllSorts()
		resetDefaultState()
		return
	}

	async function startSeletedSort(selectedSorts) {
		const types = selectedSorts.map(sort => sort.id)
		sortsState = sortsState.map(sort => {
			if (sort.status === STATUS.SELECTED) return { ...sort, status: STATUS.SORTING }
			return sort
		})
		const allSorts = types.map(type => registrator.runSortByType(type))
		await Promise.all(allSorts)
		resetDefaultState()
	}

	let selectedSorts = $derived(sortsState.filter(sort => sort.status === STATUS.SELECTED))

	let isShow = $derived(sortsState.some(sort => sort.status === STATUS.SELECTED))

	let isDisabled = $derived(
		sortsState.some(sort => [STATUS.SORTING, STATUS.DONE].includes(sort.status)),
	)

	return {
		get value() {
			return sortsState
		},
		get selectedSorts() {
			return selectedSorts
		},
		get isShow() {
			return isShow
		},
		get isDisabled() {
			return isDisabled
		},
		startSeletedSort,
		startAllSorts,
	}
}
