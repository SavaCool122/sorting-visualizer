<script>
	import { sortRegistrator } from './core/sort-registrator.js'
	import Toolbar from './toolbar/Toolbar.svelte'
	import Bars from './bars-mode/Bars.svelte'
	import { SORT_TYPE_LIST } from './core/sort-type.js'
	import { randomArray } from './lib/random-array.js'
	import Contacts from './toolbar/Contacts.svelte'
	import Card from './cards/Card.svelte'

	const registrator = sortRegistrator()

	let sortsState = SORT_TYPE_LIST.map(sort => ({
		id: sort,
		status: 'active',
	}))

	let mode
	let size = 18
	$: list = randomArray(size)

	$: show = sortsState.some(sort => sort.status === 'selected')

	const startSort = () => {
		const isAllSort = !sortsState.some(sort => sort.status === 'selected')
		if (isAllSort) {
			sortsState = sortsState.map(sort => ({ ...sort, status: 'progress' }))
			registrator.runAllSorts()
			return
		}
		const types = sortsState.filter(sort => sort.status === 'selected').map(sort => sort.id)
		sortsState = sortsState.map(sort => {
			if (sort.status === 'selected') return { ...sort, status: 'progress' }
			return sort
		})
		types.forEach(type => {
			registrator.runSortByType(type)
		})
	}
</script>

<div
	class="relative grid place-items-center gap-4 p-4 md:grid-cols-2 md:p-8 lg:h-screen lg:grid-cols-3"
>
	<Toolbar {show} on:sort={startSort} bind:size bind:mode />

	{#each sortsState as sort}
		<Card sortType={sort.id} bind:status={sort.status}>
			<Bars {registrator} {list} sortType={sort.id} />
		</Card>
	{/each}
</div>

<Contacts />
