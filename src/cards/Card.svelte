<script>
	import { SORT_TYPE } from '../core/state/sort-type.js'
	import { STATUS } from '../core/state/status.js'
	import { cn } from '../lib/css/cn.js'
	import CardStatus from './card-status.svelte'

	let { id, status = $bindable(), children } = $props()
</script>

<div
	class="relative grid h-full w-full place-content-center rounded-3xl border-2 border-black p-4 min-h-[225px]"
	class:border-dashed={status === STATUS.SELECTED}
>
	<CardStatus {id} {status} onchange={newStatus => (status = newStatus)} />

	<!-- {@render children()} -->

	<span class={cn('invisible mt-2 text-center', status === STATUS.SORTING && 'visible')}>
		{id} sort
	</span>
</div>
