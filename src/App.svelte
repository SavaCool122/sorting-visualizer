<script>
	import './lib/css/global.css'

	import Container from './lib/components/container/container.svelte'
	import Header from './header/header.svelte'
	import Sorting from './sorting/sorting.svelte'

	const settings = $state({ mode: 'bars' })
</script>

<Container>
	<Header />
	<Sorting />
</Container>
