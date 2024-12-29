<script>
	import './lib/css/global.css'

	import Container from './lib/components/container.svelte'
	import Header from './header/header.svelte'
	import Sorting from './sorting/sorting.svelte'
	import { ArrayTypes, Statuses } from './lib/constants.js'

	let settings = $state({ mode: 'bar', type: ArrayTypes.random, status: Statuses.ready })

	function markDone() {
		setTimeout(() => {
			settings.status = Statuses.ready
		}, 800)
	}

	$inspect(settings)
</script>

<Container>
	<Header bind:mode={settings.mode} bind:type={settings.type} bind:status={settings.status} />

	<div class="mt-4 mb-2 font-medium text-black/60">Selected Sorting</div>

	<Sorting status={settings.status} arrayType={settings.type} ondone={markDone} />
</Container>
