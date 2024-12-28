<script>
	import './lib/css/global.css'

	import Container from './lib/components/container.svelte'
	import Header from './header/header.svelte'
	import Sorting from './sorting/sorting.svelte'
	import { ArrayTypes, Statuses } from './lib/constants.js'
	import { SortList } from './sorting/constants.js'

	let settings = $state({ mode: 'bar', type: ArrayTypes.random })
	let status = $state(Statuses.ready)
	let sortStatuses = $state(Array.from({ length: SortList.length }, () => status))

	$effect(() => {
		sortStatuses = Array.from({ length: SortList.length }, () => status)
	})
</script>

<Container>
	<Header bind:mode={settings.mode} bind:type={settings.type} />

	<div class="mt-4 mb-2 font-medium text-black/60">Selected Sorting</div>

	<Sorting bind:status={sortStatuses} arrayType={settings.type} />
</Container>
