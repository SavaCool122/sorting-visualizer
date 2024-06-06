<svelte:options runes={true} />

<script>
	let { name, ...rest } = $props()
</script>

<svg {...rest}>
	<use href={`/icons.svg#${name}`} />
</svg>
