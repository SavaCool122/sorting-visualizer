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
      :active="selectedSort === sortConfig.id"
      :disabled="sortConfig.disabled"
      @click="emitSortType(sortConfig.id)"
    >
      {{ sortConfig.name }}
    </SButton>
  </div>
</template>

<script>
import SButton from "../../../components/SButton.vue"; // TODO alias
import {sortingList} from "../../sortConfig";

export default {
  name: "SortButtons",
  components: {SButton},
  props: {
    selectedSort: {
      type: [String, null],
      required: true,
    },
    isAvailableChangeSortType: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      sortingList,
    };
  },
  methods: {
    emitSortType(sortType) {
      if (!this.isAvailableChangeSortType) return
      this.$emit("sortType", sortType);
    },
    emitReset() {
      if (!this.isAvailableChangeSortType) return
      this.$emit("resetArray");
    },
  },
};
</script>
