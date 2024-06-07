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
			sortsState = sortsState.map(sort => ({ ...sort, status: 'active' }))
		}, 1000)
	}

	async function startAllSorts() {
		sortsState = sortsState.map(sort => ({ ...sort, status: 'progress' }))
		await registrator.runAllSorts()
		resetDefaultState()
		return
	}

	async function startSeletedSort(selectedSorts) {
		const types = selectedSorts.map(sort => sort.id)
		sortsState = sortsState.map(sort => {
			if (sort.status === 'selected') return { ...sort, status: 'progress' }
			return sort
		})
		const allSorts = types.map(type => registrator.runSortByType(type))
		await Promise.all(allSorts)
		resetDefaultState()
	}

	let selectedSorts = $derived(sortsState.filter(sort => sort.status === 'selected'))

	let isShow = $derived(sortsState.some(sort => sort.status === 'selected'))
	let isBlock = $derived(sortsState.some(sort => ['progress', 'done'].includes(sort.status)))

	return {
		get state() {
			return sortsState
		},
		get selectedSorts() {
			return selectedSorts
		},
		get isShow() {
			return isShow
		},
		get isBlock() {
			return isBlock
		},
		startSeletedSort,
		startAllSorts,
	}
}
