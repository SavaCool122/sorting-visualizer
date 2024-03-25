<script>
	import { createEventDispatcher } from 'svelte'
	import { randomArray } from '../lib/randomArray.js'
	import { SORT_TYPE_LABEL } from '../core/sortType.js'
	import Button from '../lib/components/button/Button.svelte'
	import Contacts from './Contacts.svelte'
	import Slider from '../lib/components/slider/Slider.svelte'

	const dispatch = createEventDispatcher()

	export let list
	export let sortList
	let arrayLength = 25

	let disabled = false

	function onSelectSort(type) {
		dispatch('select-sort', type)
	}
</script>

<div class="flex h-full flex-col justify-between bg-white p-3">
	<div>
		<div class="grid-rows-auto grid grid-cols-2 gap-4">
			<Button {disabled} class="col-span-2" on:click={() => (list = randomArray(arrayLength))}>
				Reset Array
			</Button>

			{#each sortList as sortType}
				<Button {disabled} class="col-span-1" on:click={() => onSelectSort(sortType)}>
					{SORT_TYPE_LABEL[sortType]}
				</Button>
			{/each}

			<Button {disabled} class="col-span-2" on:click={() => onSelectSort('ALL')}>All</Button>

			<Slider {disabled} label={arrayLength} class="col-span-2" bind:value={arrayLength} />
		</div>
	</div>
	<div class="mb-5 flex items-center justify-center">
		<Contacts />
	</div>
</div>
