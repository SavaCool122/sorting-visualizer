<script>
	export let sortLabel
	export let isDone
	export let stepsLength
</script>

<span class="absolute p-3 text-white">
	Sort type: {sortLabel || 'None'}
	<br />
	Steps: {stepsLength}
	{#if isDone}
		<br />
		Done ✓
	{/if}
</span>
