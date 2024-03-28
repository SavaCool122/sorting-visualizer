<script>
	import Slider from '../../lib/ui/slider/Slider.svelte'

	export let size
</script>

<div>
	<Slider class="m-auto w-2/3" bind:value={size} label={size} />
</div>
