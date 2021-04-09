<template>
  <div class="grid grid-cols-2 grid-rows-auto gap-1 p-1">
    <button
      class="col-span-2 p-2 border-black border-2 bg-gray-100"
      @click="emitReset"
    >
      Reset Array
    </button>
    <button
      v-for="sortConfig in sortingList"
      :key="sortConfig.id"
      :class="{
        'cursor-not-allowed': sortConfig.disable,
        'bg-gray-400': sortConfig.disable,
      }"
      class="p-2 border-black border-2 bg-gray-100"
      :disabled="sortConfig.disable"
      @click="emitSortType(sortConfig.handler)"
    >
      {{ sortConfig.name }}
    </button>
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
    },
  },
};
</script>
