<script>
	import { sortRegistrator } from './core/sort-registrator.js'
	import Toolbar from './toolbar/Toolbar.svelte'
	import Bars from './bars-mode/Bars.svelte'
	import { SORT_TYPE } from './core/sort-type.js'
	import Contacts from './toolbar/Contacts.svelte'
	import Card from './cards/Card.svelte'
	import Images from './image-mode/Images.svelte'
	import { STATUS } from './core/status.js'

	const sortTypeList = new Set(Object.keys(SORT_TYPE))

	const registrator = sortRegistrator(sortTypeList)

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

	async function startSort() {
		const selectedSorts = sortsState.filter(sort => sort.status === 'selected')

		if (selectedSorts.length > 0) startSeletedSort(selectedSorts)
		else startAllSorts()
	}

	let mode = $state('bars')
</script>

<div
	class="relative grid place-items-center gap-4 p-4 md:grid-cols-2 md:p-9 lg:h-screen lg:grid-cols-3"
>
	<Toolbar
		show={sortsState.some(sort => sort.status === 'selected')}
		block={sortsState.some(sort => ['progress', 'done'].includes(sort.status))}
		sort={startSort}
		bind:mode
	/>

	{#each sortsState as sort}
		<Card sortType={sort.id} bind:status={sort.status}>
			{#if mode === 'bars'}
				<Bars bind:status={sort.status} {registrator} sortType={sort.id} />
			{:else}
				<Images bind:status={sort.status} {registrator} sortType={sort.id} />
			{/if}
		</Card>
	{/each}
</div>

<Contacts />
