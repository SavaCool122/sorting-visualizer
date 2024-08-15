<script>
	let { variant = 'primary', transparent, onclick, children } = $props()
</script>

<button
	class="absolute inset-0 rounded-3xl opacity-90"
	class:bg-primary={variant === 'primary'}
	class:bg-secondary={variant === 'secondary'}
	class:bg-success={variant === 'success'}
	class:opacity-90={transparent}
	{onclick}
>
	{@render children()}
</button>
