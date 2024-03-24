<script>
	import Sidebar from './lib/components/slider/Sidebar.svelte'
	import Bars from './view-modes/bars/Bars.svelte'
	import { SORT_TYPE_LIST, SORT_TYPE_LABEL } from './core/sortType.js'
	import { sortRegistrator } from './core/sortRegistrator.js'

	const registrator = sortRegistrator()

	let list = []
	let graph = SORT_TYPE_LIST

	const startSelectedSort = ({ detail: type }) => {
		if (type === 'ALL') {
			registrator.runAllSorts()
		} else {
			registrator.runSortByType(type)
		}
	}
</script>

<div class="grid grid-cols-6 min-h-screen">
	<Sidebar sortList={SORT_TYPE_LIST} bind:list on:select-sort={startSelectedSort} />
	<div class="grid grid-cols-2 col-span-5">
		{#each graph as sortingAlgorithm}
			<Bars
				{registrator}
				{list}
				sortLabel={SORT_TYPE_LABEL[sortingAlgorithm]}
				sortType={sortingAlgorithm}
			/>
		{/each}
	</div>
</div>
