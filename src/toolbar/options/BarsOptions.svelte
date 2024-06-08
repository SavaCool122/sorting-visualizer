<script>
	import Button from '../../lib/ui/button/Button.svelte'

	let { options = $bindable() } = $props()
</script>

<div class="grid grid-cols-2 gap-2 p-2">
	<Button onclick={() => (options = { type: 'random' })} class="col-span-2 px-2 py-1 text-sm">
		random
	</Button>
	<Button onclick={() => (options = { type: 'reversed' })} class="px-2 py-1 text-sm "
		>reversed</Button
	>
	<Button onclick={() => (options = { type: 'few-unique' })} class="px-2 py-1 text-sm"
		>few unique</Button
	>
</div>
