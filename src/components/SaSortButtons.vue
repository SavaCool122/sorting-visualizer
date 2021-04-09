<template>
  <div class="grid grid-cols-2 grid-rows-auto">
    <button class="col-span-2" @click="emitReset">Reset Array</button>
    <button
      v-for="sortConfig in sortingList"
      :key="sortConfig.id"
      :class="{ 'cursor-not-allowed': sortConfig.disabled }"
      :disabled="sortConfig.disabled"
      @click="emitSortType(sortConfig.handler)"
    >
      {{ sortConfig.name }}
    </button>
    <button class="col-span-2" @click="emitTestArray">Test Array</button>
  </div>
</template>

<script>
import { sortingList } from "../constant/index";

export default {
  name: "SaSortButtons",

  props: {
    bars: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      sortingList,
    };
  },

  methods: {
    emitSortType(sortType) {
      this.$emit("sortType", sortType);
    },
    emitReset() {
      this.$emit("resetArray");
    },
    emitTestArray() {
      this.$emit("testArray");
    }
  },
};
</script>
