<script>
	import { createEventDispatcher } from 'svelte'
	import { randomArray } from '../lib/randomArray.js'
	import { SORT_TYPE_LABEL } from '../core/sortType.js'
	import Button from '../lib/components/button/Button.svelte'
	import Contacts from './Contacts.svelte'
	import Slider from '../lib/components/slider/Slider.svelte'

	const dispatch = createEventDispatcher()

	let arrayLength = 25
	let list = []

	let disabled = false

	function onSelectSort(type) {
		dispatch('select-sort', type)
	}
</script>

<div class="peer absolute top-0 h-8 w-1/2"></div>
<div
	class="absolute top-[-160px] z-10 h-[120px] w-1/2 rounded-3xl border-2 border-black bg-primary transition-[top] hover:top-4 peer-hover:top-4"
>
	<div class="grid grid-cols-3 place-items-center">
		<div>slider</div>
		<div>
			<div class="flex">
				<button class="rounded-lg border-2 border-black bg-secondary px-2 py-1">bars</button>
				<button class="rounded-lg border-2 border-black bg-secondary px-2 py-1">image</button>
				<button class="rounded-lg border-2 border-black bg-secondary px-2 py-1">circle</button>
			</div>
			<button class="w-full rounded-lg border-2 border-black bg-secondary px-4 py-2"> Sort </button>
		</div>
		<div>slider</div>
	</div>
</div>
