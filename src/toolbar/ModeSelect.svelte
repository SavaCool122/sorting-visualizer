<script>
	import ToggleGroup from '../lib/ui/toggle-group/ToggleGroup.svelte'

	export let mode

	const options = [
		{
			name: 'bars',
		},
		{
			name: 'image',
			disabled: true,
		},
		{
			name: 'circle',
			disabled: true,
		},
	]
</script>

<ToggleGroup bind:value={mode} {options} defaultValue="bars" />
