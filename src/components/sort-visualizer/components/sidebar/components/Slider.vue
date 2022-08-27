<template>
	<div>
		<div class="range-value text-center">
			<label :style="disabled ? 'color: gray' : ''">
				{{ label }}
			</label>
		</div>
		<div class="flex justify-center mt-1">
			<input
				ref="slider"
				type="range"
				:disabled="disabled"
				:min="min"
				:max="max"
				:value="value"
				@input.stop="updateValue"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Slider',
	props: {
		label: {
			type: Number,
			required: true,
		},
		value: {
			type: Number,
			required: true,
		},
		max: {
			type: Number,
			required: false,
			default: 100,
		},
		min: {
			type: Number,
			required: false,
			default: 50,
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	methods: {
		updateValue({ target: { value } }) {
			this.$emit('input', Number(value) || 0)
		},
	},
}
</script>

<style>
.range-value {
	font-size: 30px;
	text-align: center;
	color: var(--primary);
}

input[type='range'] {
	appearance: none;
	width: 300px;
	height: 30px;
	border-radius: 11px;
	background-color: var(--primary-light);
	overflow: hidden;
	outline: none;
}

input[type='range']:focus-visible {
	outline: 4px dotted var(--primary);
}

input[type='range']::-webkit-slider-thumb {
	-webkit-appearance: none;
	width: 15px;
	height: 30px;
	background: var(--primary);
	box-shadow: -350px 0 0 340px var(--primary);
	cursor: pointer;
}

input[type='range']:disabled::-webkit-slider-thumb {
	background: grey;
	box-shadow: -350px 0 0 340px grey;
}
</style>
