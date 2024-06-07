<script>
	import { sortRegistrator } from './core/state/sort-registrator.js'
	import Toolbar from './toolbar/Toolbar.svelte'
	import Bars from './bars-mode/Bars.svelte'
	import { SORT_TYPE } from './core/state/sort-type.js'
	import Contacts from './toolbar/Contacts.svelte'
	import Card from './cards/Card.svelte'
	import Images from './image-mode/Images.svelte'
	import { createState } from './core/state/sort-state.svelte.js'

	let mode = $state('bars')

	const sortTypeList = new Set(Object.keys(SORT_TYPE))

	const registrator = sortRegistrator(sortTypeList)
	const sortState = createState(sortTypeList, registrator)

	async function startSort() {
		if (sortState.selectedSorts.length > 0) sortState.startSeletedSort(sortState.selectedSorts)
		else sortState.startAllSorts()
	}
</script>

<div
	class="relative grid place-items-center gap-4 p-4 md:grid-cols-2 md:p-9 lg:h-screen lg:grid-cols-3"
>
	<Toolbar show={sortState.isShow} block={sortState.isBlock} sort={startSort} bind:mode />

	{#each sortState.state as sort}
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
