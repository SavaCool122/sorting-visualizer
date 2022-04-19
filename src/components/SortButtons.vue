<template>
  <div class="grid grid-cols-2 grid-rows-auto gap-1 p-1">
    <SButton
      class="col-span-2"
      @click="emitReset"
    >
      Reset Array
    </SButton>
    <SButton
      v-for="sortConfig in sortingList"
      :key="sortConfig.id"
      :disabled="sortConfig.disabled"
      @click="emitSortType(sortConfig.id)"
    >
      {{ sortConfig.name }}
    </SButton>
    <SButton
      class="col-span-2"
      @click="allSorts"
    >
      All sorts
    </SButton>
  </div>
</template>

<script>
import {sortingList} from "../utils/constant/constant";
import SButton from "./common/SButton.vue";

export default {
  name: "SortButtons",
  components: {SButton},
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
    allSorts() {
      this.$emit("all-sorts");
    },
  },
};
</script>
