<template>
	<div>
		<div class="text-center">
			<label>{{ label }}</label>
		</div>
		<div class="flex justify-center">
			<input :value="value" type="range" :min="min" :max="max" @input.stop="updateValue" />
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
		updateValue(event) {
			this.$emit('input', Number(event.target.value) || 0);
		},
	},
};
</script>
