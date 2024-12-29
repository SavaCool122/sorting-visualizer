<script>
	import { Statuses } from '../lib/constants.js'

	let { status = $bindable() } = $props()

	const inProgress = $derived(() => status === Statuses.in_progress)

	function clickHandler() {
		if (status === Statuses.ready) status = Statuses.in_progress
	}
</script>

<button
	class="mr-1 cursor-pointer disabled:line-through"
	disabled={inProgress()}
	onclick={clickHandler}
>
	{inProgress() ? 'In Progress' : 'Start'}
</button>
