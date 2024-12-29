<script>
	import { makeArray } from './array-utils/make-array.js'
	import { SortList } from './constants.js'
	import SortingItem from './sorting-item.svelte'

	let { status = $bindable(), arrayType } = $props()

	let array = $state(makeArray(arrayType))
</script>

<div class="grid grid-cols-2 gap-x-5">
	{#each SortList as sortType}
		<SortingItem bind:sortStatus={status} {sortType} {array} />
	{/each}
</div>
