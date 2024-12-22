<script>
	// import ModeSelect from './mode-select/mode-select.svelte'
	// import OpenToolbar from './open-toolbar.svelte'

	let { children, disabled } = $props()

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

<div
	class="sticky top-0 z-10 flex justify-between border-b border-black/10 bg-white py-4 font-medium"
>
	<h1>Sorting Visualizer</h1>
	<button>More</button>
	<!-- <OpenToolbar onclick={() => (showToolbar = !showToolbar)} />
	<ModeSelect bind:mode options={modeOptions} />
	<ModeSelect bind:mode options={typeOption} /> -->
</div>
