<script>
	import { Statuses } from '../lib/constants.js'
	import { makeArray } from './array-utils/make-array.js'
	import { SortList } from './constants.js'
	import SortingItem from './sorting-item.svelte'

	let { status, arrayType, ondone } = $props()

	let array = $state([])

	$effect(() => {
		if (arrayType) array = makeArray(arrayType)
	})

	function sortingWithInitialState() {
		return SortList.map(sortType => ({ sortStatus: Statuses.ready, sortType }))
	}

	let sortingList = $state(sortingWithInitialState())
	let isAllDone = $derived(() => sortingList.every(s => s.sortStatus === Statuses.done))

	$effect(() => {
		if (isAllDone()) ondone()
	})

	$effect(() => {
		if (isAllDone() && status === Statuses.ready) {
			sortingList = sortingWithInitialState()
			array = makeArray(arrayType)
		}
	})
</script>

<div class="flex flex-wrap">
	{#each sortingList as sort}
		<SortingItem
			{array}
			globalSortStatus={status}
			bind:sortStatus={sort.sortStatus}
			sortType={sort.sortType}
		/>
	{/each}
</div>
