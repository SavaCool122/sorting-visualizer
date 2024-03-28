<script>
	export let name
</script>

<svg {...$$props}>
	<use href={`/icons.svg#${name}`} />
</svg>
