<template>
	<div class="flex gap-x-4 p-2 self-center">
		<a
			class="s-contact inline-flex items-center gap-x-2 mb-5 p-2"
			target="_blank"
			href="https://github.com/SavaCool122/sorting-visualizer"
		>
			Github
			<SIcon width="36" height="36" name="github" />
		</a>
	</div>
</template>

<script>
import SIcon from '../../../../common/SIcon.vue'

export default {
	name: 'Contacts',
	components: {
		SIcon,
	},
}
</script>

<style>
.s-contact:focus-visible {
	outline: 4px dotted var(--primary);
}
</style>
