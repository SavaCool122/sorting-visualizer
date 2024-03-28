<script>
	import { randomArray } from '../lib/random-array.js'
	import { SORT_TYPE_LABEL } from '../core/sort-type.js'
	import Button from '../lib/ui/button/Button.svelte'
	import Contacts from './Contacts.svelte'
	import { cn } from '../lib/cn.js'
	import Slider from '../lib/ui/slider/Slider.svelte'
	import ModeSelect from './ModeSelect.svelte'
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	export let mode
	export let size
	export let show

	const defaultClass =
		'absolute top-[-105px] z-10 h-[120px] w-1/2 rounded-3xl border-2 border-black bg-primary transition-[top] hover:top-4 peer-hover:top-4'
	const showClass = 'top-4'

	function startSort() {
		dispatch('sort')
	}
</script>

<div class="peer absolute top-0 h-8 w-1/2"></div>

<div class={cn(defaultClass, show && showClass)}>
	<div class="grid h-full grid-cols-3 place-content-center">
		<div>
			<Slider class="m-auto w-2/3" bind:value={size} label={size} />
		</div>
		<div class="space-y-2">
			<ModeSelect bind:mode />

			<button
				on:click={startSort}
				class="w-full rounded-lg border-2 border-black bg-secondary px-4 py-2 text-2xl"
			>
				SORT {show ? 'SELECTED' : 'ALL'}
			</button>
		</div>
	</div>
</div>
