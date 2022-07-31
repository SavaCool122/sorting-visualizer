<template>
	<div>
		<div class="text-center">
			<label>{{ label }}</label>
		</div>
		<div class="flex justify-center">
			<input
				ref="slider"
				type="range"
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
			type: String,
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
			default: 5,
		},
	},
	methods: {
		updateValue({ target: { value } }) {
			this.$emit('input', Number(value) || 0);
			this.changeColor(value);
		},
		changeColor(value) {
			this.$refs.slider.style.filter = `hue-rotate(-${value}deg)`;
		},
	},
};
</script>
