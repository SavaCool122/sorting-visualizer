<template>
	<div class="col-start-1 min-h-screen col-end-1 bg-white">
		<SortButtons
			:selected-sort="selectedSort"
			:is-available-change-sort-type="isAvailableChangeSortType"
			@sortType="handleSort"
			@resetArray="resetArray"
		/>
		<Slider
			:label="barsArrayLength"
			:disabled="!isAvailableChangeSortType"
			:max="200"
			:value="barsArrayLength"
			class="px-5"
			@input="emitBarArrayLength"
		/>
	</div>
</template>

<script>
import Slider from './components/Slider.vue'
import SortButtons from './components/SortButtons.vue'
import { randomIntFromInterval } from '../../utils'
import { STATUSES } from '../../constants'

export default {
	name: 'Sidebar',
	components: {
		Slider,
		SortButtons,
	},
	props: {
		barsArrayLength: {
			type: Number,
			required: true,
		},
		selectedSort: {
			type: [String, null],
			required: true,
		},
	},
	computed: {
		isAvailableChangeSortType() {
			return this.selectedSort === null
		},
	},
	methods: {
		resetArray() {
			this.emitBarArrayLength(randomIntFromInterval())
		},
		handleSort(type) {
			this.$emit('change-status', { status: STATUSES.SORT, sort: type })
		},
		emitBarArrayLength(v) {
			if (!this.isAvailableChangeSortType) return
			this.$emit('update:barsArrayLength', v)
		},
	},
}
</script>
