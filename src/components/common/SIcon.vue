<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
		:viewBox="`0 0 ${24} ${24}`"
		v-on="$attrs"
		v-html="svg"
	/>
</template>

<script>
import svg from '../../assets/icons/github.svg?raw'

const getIcon = async name => {
	const svg = (await import(`../../assets/icons/${name}.svg?raw`)).default
	const [path] = svg.match(/<path\b([\s\S]*?)\/>/g)
	return path
}

export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		width: {
			type: Number,
			required: false,
			default: 24,
		},
		height: {
			type: Number,
			required: false,
			default: 24,
		},
	},
	data() {
		return {
			svg,
		}
	},
	watch: {
		name: {
			immediate: true,
			async handler() {
				this.svg = await getIcon('github')
			},
		},
	},
}
</script>
