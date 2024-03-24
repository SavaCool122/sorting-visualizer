<script>
	import './slider.css'
	import { createEventDispatcher } from 'svelte'
	import { randomArray } from '../../randomArray.js'
	import { SORT_TYPE_LABEL } from '../../../core/sortType.js'
	import Button from '../button/Button.svelte'
	import Contacts from '../../../sidebar/Contacts.svelte'
	import Slider from '../../../sidebar/Slider.svelte'

	const dispatch = createEventDispatcher()

	export let list
	export let sortList

	let disabled = false
	let arrayLength = 25

	$: list = randomArray(arrayLength)

	function onSelectSort(type) {
		dispatch('select-sort', type)
	}
</script>

<div class="flex flex-col justify-between bg-white h-full p-3">
	<div>
		<div class="grid grid-cols-2 grid-rows-auto gap-4">
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
	<div class="flex mb-5 justify-center items-center">
		<Contacts />
	</div>
</div>
