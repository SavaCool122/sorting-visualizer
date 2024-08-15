<script>
	// import Toolbar from './toolbar/toolbar.svelte'
	import Bars from './bars-mode/bars.svelte'
	// import Images from './image-mode/images.svelte'
	import { createState } from './core/state/sort-state.svelte.js'
	import { sortRegistrator } from './core/state/sort-registrator.js'
	import { SORT_TYPE } from './core/state/sort-type.js'
	import Card from './cards/card.svelte'

	// let mode = $state('bars')
	let options = $state({
		type: 'random',
	})

	const sortTypeList = new Set(Object.keys(SORT_TYPE))

	const registrator = sortRegistrator(sortTypeList)
	const sortState = createState(sortTypeList, registrator)

	// async function sort() {
	// 	if (sortState.selectedSorts.length > 0) sortState.startSeletedSort(sortState.selectedSorts)
	// 	else sortState.startAllSorts()
	// }
</script>

<div
	class="relative grid place-items-center gap-4 p-4 md:grid-cols-2 md:p-9 lg:h-screen lg:grid-cols-3"
>
	<!-- <Toolbar show={sortState.isShow} block={sortState.isBlock} {sort} bind:mode bind:options /> -->

	{#each sortState.state as sort}
		<Card id={sort.id} bind:status={sort.status}>
			<Bars id={sort.id} bind:status={sort.status} {registrator} {options} />
			<!-- {#if mode === 'bars'}

			{:else}
				<Images bind:status={sort.status} {registrator} {options} sortType={sort.id} />
			{/if} -->
		</Card>
	{/each}
</div>
