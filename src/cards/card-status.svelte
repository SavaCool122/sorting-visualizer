<script>
	import { STATUS } from '../core/state/status'
	import CardOverlay from './card-overlay.svelte'

	let { id, status = $bindable(), onchange } = $props()
</script>

{#if status === STATUS.INITIAL}
	<CardOverlay transparent onclick={() => onchange(STATUS.SELECTED)}>
		{id} sort
	</CardOverlay>
{:else if status === STATUS.SELECTED}
	<CardOverlay variant="secondary" transparent onclick={() => onchange(STATUS.INITIAL)}>
		{id} sort
	</CardOverlay>
{:else if status === STATUS.DONE}
	<CardOverlay variant="success">DONE 🎉</CardOverlay>
{/if}
