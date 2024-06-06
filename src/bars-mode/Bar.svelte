<svelte:options runes={true} />

<script>
	let { number } = $props()
</script>

<div
	style={`height: ${number}px`}
	class="w-4 flex-grow-0 rounded-t-lg border border-black bg-primary"
></div>
