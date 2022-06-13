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
      <div>
        <ColumnList :list="arrayInt"/>
      </div>
    </MainView>
  </div>
</template>

<script>
import Sidebar from "../sidebar/components/Sidebar.vue";
import SortButtons from "../sidebar/components/SortButtons.vue";
import Slider from "../sidebar/components/Slider.vue";
import MainView from "./MainView.vue";
import ColumnList from "../sort-columns/components/ColumnList.vue"
import {Colors, ANIMATION_SPEED, sortingList} from "../constants";
import {randomIntFromInterval} from "../utils";

export default {
  components: {
    Slider,
    Sidebar,
    SortButtons,
    MainView,
    ColumnList,
  },
  data() {
    return {
      Colors,
      arrayInt: [],
      barsArrayElm: [],
      barsArrayLength: 15,
    };
  },
  watch: {
    barsArrayLength: "resetArray",
  },
  methods: {
    delay(time = 0) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
    resetArray() {
      this.arrayInt = Array.from({length: this.barsArrayLength}, () =>
        randomIntFromInterval(5, 450)
      );
    },
    handleSort(type) {
      this.barsArrayElm = document.getElementsByClassName('column');
      const arrCopy = this.arrayInt.slice();
      const sortType = sortingList.find(sort => sort.id === type)
      if (!sortType) throw new Error("Sort don't found")
      const animationToSortArray = sortType.handler(arrCopy);
      this.playSortAnimation(animationToSortArray);
    },
    playSortAnimation(animations) {
      animations.forEach(async (animation, idx) => {
        const [position, value] = animation;
        const barStyle = this.barsArrayElm[position].style;
        await this.delay(idx * ANIMATION_SPEED)
        barStyle.backgroundColor = Colors.SECONDARY_COLOR
        await this.delay(ANIMATION_SPEED / 2)
        barStyle.height = `${value}px`
        await this.delay(ANIMATION_SPEED / 4)
        barStyle.backgroundColor = Colors.PRIMARY_COLOR;
      })
    },
  },
  created() {
    this.resetArray();
  },
};
</script>
