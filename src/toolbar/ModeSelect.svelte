<script>
	import Button from '../lib/ui/button/Button.svelte'
	import { createRadioGroup, melt } from '@melt-ui/svelte'
	import { cn } from '../lib/cn.js'
	import ToggleGroup from '../lib/ui/toggle-group/ToggleGroup.svelte'

	export let mode

	const options = [
		{
			name: 'bars',
		},
		{
			name: 'image',
		},
		{
			name: 'circle',
			disabled: true,
		},
	]
</script>

<ToggleGroup bind:value={mode} {options} defaultValue="bars" />
