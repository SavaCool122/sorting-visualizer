<script>
	import ModeSelect from './ModeSelect.svelte'
	import Button from '../lib/ui/button/Button.svelte'
	import Icon from '../lib/ui/Icon.svelte'

	let { block, mode = $bindable(), show, sort } = $props()
</script>

<div class="grid h-full w-full grid-cols-3 gap-4 p-4">
	<div class="grid grid-cols-2 gap-2 p-2">
		<Button class="col-span-2 px-2 py-1 text-sm">random</Button>
		<Button class="px-2 py-1 text-sm ">reversed</Button>
		<Button class="px-2 py-1 text-sm">few unique</Button>
	</div>
	<div class="grid grid-cols-2 gap-2">
		<div class="col-span-2 grid">
			<ModeSelect bind:mode class="px-1 py-2 text-xs" />
		</div>
		<Button class="col-span-2 px-2 py-2" disabled={block} onclick={sort}>
			SORT {show ? 'SELECTED' : 'ALL'}
		</Button>
	</div>
	<div class="grid place-content-end justify-center text-xl">
		<div class="relative flex items-center gap-2 p-2">
			<Icon name="github" width="30" height="30" class="text-red-300" />
			<a
				href="https://github.com/SavaCool122/sorting-visualizer"
				class="after:absolute after:inset-1">Github</a
			>
		</div>
	</div>
</div>
