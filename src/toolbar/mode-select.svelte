<script>
	import ToggleGroup from '../lib/ui/toggle-group/toggle-group.svelte'

	let { mode = $bindable(), ...rest } = $props()

	const options = [{ name: 'bars' }, { name: 'image' }, { name: 'circle', disabled: true }]
</script>

<ToggleGroup bind:value={mode} {options} class={rest.class} />
