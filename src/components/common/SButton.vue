<template>
	<button
		v-bind="$attrs"
		class="s-button text-white p-2"
		:class="{
			'bg-primary-light text-primary': !active && !disabled,
			'cursor-not-allowed bg-gray-400': disabled,
			'bg-primary text-white': active,
		}"
		:disabled="disabled"
		style="border-radius: 11px"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: 'SButton',
	props: {
		disabled: {
			type: Boolean,
			default: false,
		},
		active: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style>
.s-button {
	border: 3px dotted transparent;
}

.s-button:focus-visible {
	outline: 4px dotted var(--primary);
}
</style>
