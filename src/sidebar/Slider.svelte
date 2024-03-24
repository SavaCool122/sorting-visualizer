<script>
	import config from '../config.js'

	export let label
	export let disabled = false
	export let value

	const { min, max } = config.slider
</script>

<div class={$$props.class}>
	<div class="range-value text-center">
		<label for="range" style={disabled ? 'color: gray' : ''}>{label}</label>
	</div>
	<div class="flex justify-center mt-1">
		<input id="range" type="range" {disabled} bind:value {min} {max} />
	</div>
</div>
