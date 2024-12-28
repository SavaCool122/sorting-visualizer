<script>
	const { title, status, children } = $props()
</script>

<div class="min-h-[275px] border-b border-black/10">
	<div class=" border-b border-black/10 py-2 text-4xl uppercase">
		{title}
	</div>
	<div class="border-b border-black/10 py-1">
		{@render status()}
	</div>
	<div class="py-1 pb-10">
		{@render children()}
	</div>
</div>
