<script>
	import { createEventDispatcher } from 'svelte'
	import { randomArray } from '../lib/random-array.js'
	import { SORT_TYPE_LABEL } from '../core/sort-type.js'
	import Button from '../lib/ui/button/Button.svelte'
	import Contacts from './Contacts.svelte'
	import Slider from '../lib/ui/slider/Slider.svelte'
	import { cn } from '../lib/cn.js'

	const dispatch = createEventDispatcher()

	let arrayLength = 25
	let list = []

	let disabled = false
	let show = false
	let sliderValue = 25
	let selected = 'bars'

	function onSelectSort(type) {
		dispatch('select-sort', type)
	}

	const defaultClass =
		'absolute top-[-105px] z-10 h-[120px] w-1/2 rounded-3xl border-2 border-black bg-primary transition-[top] hover:top-4 peer-hover:top-4'
	const showClass = 'top-4'
</script>

<div class="peer absolute top-0 h-8 w-1/2"></div>
<div class={cn(defaultClass, show && showClass)}>
	<div class="grid h-full grid-cols-3 place-content-center">
		<div>
			<Slider class="m-auto w-2/3" bind:value={sliderValue} label={sliderValue} />
		</div>
		<div class="space-y-2">
			<div class="flex justify-center gap-2">
				<button
					disabled={selected !== 'bars'}
					class="rounded-lg border-2 border-black bg-secondary px-4 py-1 disabled:opacity-70"
				>
					bars
				</button>
				<button
					disabled={selected !== 'image'}
					class="rounded-lg border-2 border-black bg-secondary px-4 py-1 disabled:opacity-70"
				>
					image
				</button>
				<button
					disabled={selected !== 'circle'}
					class="rounded-lg border-2 border-black bg-secondary px-4 py-1 disabled:opacity-70"
				>
					circle
				</button>
			</div>
			<button class="w-full rounded-lg border-2 border-black bg-secondary px-4 py-2 text-2xl">
				SORT ALL
			</button>
		</div>
	</div>
</div>
