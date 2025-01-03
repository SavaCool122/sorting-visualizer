<script>
	const { title, status, children } = $props()
</script>

<div class="min-h-[275px] w-1/2 border-b border-black/10 px-2.5 md:w-1/3 lg:w-1/4 xl:w-1/6">
	<div class="font-h1 border-b border-black/10 py-2 uppercase">
		{title}
	</div>
	<div class="border-b border-black/10 py-2">
		{@render status()}
	</div>
	<div class="py-1 pb-10">
		{@render children()}
	</div>
</div>
