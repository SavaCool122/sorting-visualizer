<template>
	<div class="p-3 grid grid-flow-col items-end gap-1 relative">
		<span class="absolute text-white top-1 left-3">{{ title }}</span>
		<div
			v-for="(number, xid) in list"
			:key="xid"
			:style="{ height: number + 'px', backgroundColor: Colors.PRIMARY_COLOR }"
			class="column"
		></div>
	</div>
</template>

<script>
import { Colors } from '../constants';

export default {
	name: 'ColumnList',
	props: {
		list: {
			type: Array,
			required: true,
		},
		id: {
			type: String,
			required: false,
			default: '',
		},
		title: {
			type: String,
			required: false,
			default: '',
		},
	},
	data() {
		return {
			Colors,
		};
	},
};
</script>
