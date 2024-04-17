<script>
	import { sortRegistrator } from './core/sort-registrator.js'
	import Toolbar from './toolbar/Toolbar.svelte'
	import Bars from './bars-mode/Bars.svelte'
	import { SORT_TYPE_LIST } from './core/sort-type.js'
	import { randomArray } from './core/random-array.js'
	import Contacts from './toolbar/Contacts.svelte'
	import Card from './cards/Card.svelte'
	import Images from './image-mode/Images.svelte'
	import config from './config.js'

	const registrator = sortRegistrator()

	let sortsState = SORT_TYPE_LIST.map(sort => ({
		id: sort,
		status: 'active',
	}))

	let mode = 'bars'
	$: list = randomArray(config.slider.max)

	$: show = sortsState.some(sort => sort.status === 'selected')
	$: block = sortsState.some(sort => ['progress', 'done'].includes(sort.status))

	function resetDefaultState() {
		setTimeout(() => {
			sortsState = sortsState.map(sort => ({ ...sort, status: 'active' }))
		}, 1000)
	}

	const startSort = async () => {
		const isAllSort = !sortsState.some(sort => sort.status === 'selected')
		if (isAllSort) {
			sortsState = sortsState.map(sort => ({ ...sort, status: 'progress' }))
			await registrator.runAllSorts()
			resetDefaultState()
			return
		}
		const types = sortsState.filter(sort => sort.status === 'selected').map(sort => sort.id)
		sortsState = sortsState.map(sort => {
			if (sort.status === 'selected') return { ...sort, status: 'progress' }
			return sort
		})
		const allSorts = types.map(type => registrator.runSortByType(type))
		await Promise.all(allSorts)
		resetDefaultState()
	}
</script>

<div
	class="relative grid place-items-center gap-4 p-4 md:grid-cols-2 md:p-8 lg:h-screen lg:grid-cols-3"
>
	<Toolbar {show} {block} on:sort={startSort} bind:mode />

	{#each sortsState as sort}
		<Card sortType={sort.id} bind:status={sort.status}>
			{#if mode === 'bars'}
				<Bars bind:status={sort.status} {registrator} {list} sortType={sort.id} />
			{:else}
				<Images {registrator} sortType={sort.id} />
			{/if}
		</Card>
	{/each}
</div>

<Contacts />
