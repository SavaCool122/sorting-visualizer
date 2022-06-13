<template>
  <div class="grid grid-cols-5 min-h-full">
    <Sidebar>
      <SortButtons
        @sortType="handleSort"
        @resetArray="resetArray"
      />
      <Slider :max="360" label="Items Count" v-model="barsArrayLength"/>
    </Sidebar>
    <MainView>
      <ColumnList :list="arrayInt"/>
    </MainView>
  </div>
</template>

<script>
import Sidebar from "../sidebar/components/Sidebar.vue";
import SortButtons from "../sidebar/components/SortButtons.vue";
import Slider from "../sidebar/components/Slider.vue";
import MainView from "./MainView.vue";
import ColumnList from "../sort-columns/components/ColumnList.vue"
import {randomIntFromInterval, playSortAnimation, getSortMethods} from "../utils";

export default {
  components: {
    MainView,
    Slider,
    Sidebar,
    SortButtons,
    ColumnList,
  },
  data() {
    return {
      arrayInt: [],
      barsArrayElm: [],
      barsArrayLength: 15,
    };
  },
  watch: {
    barsArrayLength: "resetArray",
  },
  methods: {
    resetArray() {
      this.arrayInt = Array.from({length: this.barsArrayLength}, () => randomIntFromInterval(5, 450))
    },
    async handleSort(type) {
      this.barsArrayElm = document.getElementsByClassName('column');
      const arrCopy = this.arrayInt.slice();

      const sortMethod = getSortMethods(type)
      const animationToSortArray = sortMethod(arrCopy);

      await playSortAnimation(animationToSortArray, this.barsArrayElm);
      console.log('SORT END') // TODO Проверка что массив отсортирован
    },
  },
  created() {
    this.resetArray();
  },
};
</script>
