<template>
  <div class="col-start-1 min-h-screen col-end-1 bg-gray-300">
    <SortButtons
      :selected-sort="selectedSort"
      @sortType="handleSort"
      @resetArray="resetArray"
    />
    <Slider :max="360" label="Items Count" @input="emitBarArrayLength" :value="barsArrayLength"/>
  </div>
</template>

<script>
import SortButtons from "./SortButtons.vue";
import Slider from "./Slider.vue";
import {randomIntFromInterval} from '../../utils'
import {STATUSES} from '../../constants'

export default {
  name: "Sidebar",
  components: {
    Slider,
    SortButtons,
  },
  props: {
    barsArrayLength: {
      type: Number,
      required: true
    },
    selectedSort: {
      type: [String, null],
      required: true,
    }
  },
  methods: {
    resetArray() {
      this.emitBarArrayLength(randomIntFromInterval())
    },
    handleSort(type) {
      this.$emit('change-status', {status: STATUSES.SORT, sort: type})
    },
    emitBarArrayLength(v) {
      this.$emit('update:barsArrayLength', v)
    }
  }
};
</script>
