<script>
	import Button from '../../lib/ui/button/Button.svelte'
	let { options = $bindable() } = $props()
</script>

<div class="grid grid-cols-3 place-content-center gap-4 px-6">
	<Button onclick={() => (options.image = { type: 'dog' })} class="px-1 py-4 text-base">1</Button>
	<Button onclick={() => (options.image = { type: 'kronk' })} class="px-1 py-4 text-base">2</Button>
	<Button disabled class="px-1 py-4 text-base">3</Button>
</div>
