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
</script>

<Container>
	<Header bind:mode={settings.mode} bind:type={settings.type} bind:status={settings.status} />

	<h1 class="font-h1 mt-4 mb-8">Selected Sorting</h1>

	<Sorting status={settings.status} arrayType={settings.type} ondone={markDone} />
</Container>
