<script>
	import ModeSelect from './mode-select/mode-select.svelte'
	import OpenToolbar from './open-toolbar.svelte'

	let { mode = $bindable(), disabled, options = $bindable() } = $props()

	let showToolbar = $state(false)

	const modeOptions = [
		{ value: 'bar', disabled },
		{ value: 'image', disabled },
		{ value: 'circle', disabled: true },
	]

	const typeOption = [
		{ value: 'random', disabled },
		{ value: 'reversed', disabled },
		{ value: 'few-unique', disabled },
	]
</script>

<div class="h-full w-full rounded-3xl border-2 border-black pb-4 px-4 bg-primary min-h-[225px]">
	<OpenToolbar onclick={() => (showToolbar = !showToolbar)} />
	<ModeSelect bind:mode options={modeOptions} />
	<ModeSelect bind:mode options={typeOption} />
</div>
