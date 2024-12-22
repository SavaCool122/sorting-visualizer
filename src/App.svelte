<script>
	import './lib/css/global.css'

	import Container from './lib/components/container.svelte'
	import Header from './header/header.svelte'
	import Sorting from './sorting/sorting.svelte'

	let settings = $state({ mode: 'bar', type: 'random' })
</script>

<Container>
	<Header bind:mode={settings.mode} bind:type={settings.type} />

	<div class="mt-4 mb-2 font-medium text-black/60">Selected Sorting</div>

	<Sorting />
</Container>
