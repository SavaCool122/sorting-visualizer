<script>
	import './slider.css'
	import config from '../../../config.js'

	export let label = config.slider.max
	export let disabled = false
	export let value = config.slider.max

	const { min, max } = config.slider
</script>

<div class={$$props.class}>
	<div class="range-value text-center">
		<label for="range" style={disabled ? 'color: gray' : ''}>{label}</label>
	</div>
	<div class="mt-1 flex justify-center">
		<input id="range" type="range" {disabled} bind:value {min} {max} />
	</div>
</div>
