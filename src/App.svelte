<script>
	import Toolbar from './toolbar/Toolbar.svelte'
	import Bars from './view-modes/bars/Bars.svelte'
	import { SORT_TYPE_LIST, SORT_TYPE_LABEL } from './core/sortType.js'
	import { sortRegistrator } from './core/sortRegistrator.js'
	import { randomArray } from './lib/randomArray.js'

	const registrator = sortRegistrator()

	let arrayLength = 18
	let list = randomArray(arrayLength)
	let graph = SORT_TYPE_LIST

	const startSelectedSort = ({ detail: type }) => {
		if (type === 'ALL') {
			registrator.runAllSorts()
		} else {
			registrator.runSortByType(type)
		}
	}
</script>

<!--<Toolbar sortList={SORT_TYPE_LIST} bind:list on:select-sort={startSelectedSort} />-->
<div class="grid place-items-center gap-4 p-4 md:grid-cols-2 md:p-8 lg:h-screen lg:grid-cols-3">
	{#each graph as sortType}
		<Bars {list} {sortType} />
	{/each}
</div>
