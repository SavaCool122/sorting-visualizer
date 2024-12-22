{#each [64, 55, 16, 17, 18, 50, 10, 35, 20] as bar}
	<div class="mb-1 h-3 w-full border border-black/20">
		<div
			style={`width: ${bar}%`}
			class="flex h-full items-center justify-end border-r border-black/20 pr-0.5 text-[10px]"
		>
			{bar}
		</div>
	</div>
{/each}
