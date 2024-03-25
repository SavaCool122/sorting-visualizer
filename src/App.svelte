<script>
	import Toolbar from './toolbar/Toolbar.svelte'
	import Bars from './bars-mode/Bars.svelte'
	import { SORT_TYPE_LIST, SORT_TYPE_LABEL } from './core/sort-type.js'
	import { sortRegistrator } from './core/sort-registrator.js'
	import { randomArray } from './lib/random-array.js'
	import Contacts from './toolbar/Contacts.svelte'

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

<div
	class="relative grid place-items-center gap-4 p-4 md:grid-cols-2 md:p-8 lg:h-screen lg:grid-cols-3"
>
	<Toolbar on:select-sort={startSelectedSort} />
	{#each graph as sortType}
		<Bars {list} {sortType} />
	{/each}
</div>

<Contacts />
