<script>
	import Button from '../lib/ui/button/Button.svelte'
	import { cn } from '../lib/cn.js'
	import ModeSelect from './ModeSelect.svelte'
	import { createEventDispatcher } from 'svelte'
	import BarSettings from './bars/Settings.svelte'
	import ImageSettings from './image/Settings.svelte'
	const dispatch = createEventDispatcher()

	export let block
	export let mode
	export let show

	const defaultClass = 'z-10 rounded-3xl border-2 border-black bg-primary '
	const desktopClass = 'md:h-[120px] md:w-1/2 md:top-[-105px] md:absolute md:p-0'
	const showClass = 'md:hover:top-4 md:peer-hover:top-4 transition-[top,bottom]'
	const showFromJsClass = 'md:top-4'
	const mobileClass = 'h-[200px] fixed bottom-[10px] w-[300px] p-4'

	const config = {
		bars: {
			component: BarSettings,
			options: {},
		},
		image: {
			component: ImageSettings,
			options: {},
		},
	}

	function startSort() {
		dispatch('sort')
	}
</script>

<div class="peer absolute top-0 h-8 w-1/2"></div>

<div class={cn(defaultClass, desktopClass, mobileClass, showClass, show && showFromJsClass)}>
	<div class="grid h-full grid-cols-1 place-content-center md:grid-cols-3">
		<svelte:component this={config[mode].component} {...config[mode].options} />

		<div class="space-y-2">
			<ModeSelect bind:mode />

			<Button disabled={block} on:click={startSort}>
				SORT {show ? 'SELECTED' : 'ALL'}
			</Button>
		</div>
	</div>
</div>
