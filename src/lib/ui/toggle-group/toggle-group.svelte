
<script>
	import { Label, RadioGroup } from "bits-ui";

	let { options = [], value = $bindable(), disabled = false, ...rest } = $props()
</script>

<RadioGroup.Root class="flex flex-col gap-4 text-sm font-medium">
	{#each options as option}
	<div
	class="group flex select-none items-center text-foreground transition-all"
>
	<RadioGroup.Item
		id="amazing"
		value="amazing"
		class="w-full rounded-lg border-2 border-black bg-secondary px-4 py-2 text-2xl opacity-50 disabled:bg-gray-400 disabled:opacity-100 aria-checked:opacity-100 aria-checked:border-black"
	/>
	<Label.Root for="amazing" class="pl-3">Amazing</Label.Root>
</div>
	{/each}
</RadioGroup.Root>

