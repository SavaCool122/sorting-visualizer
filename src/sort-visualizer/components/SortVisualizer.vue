<template>
  <div class="grid grid-cols-5 min-h-full">
    <Sidebar>
      <SortButtons
        @sortType="handleSort"
        @resetArray="resetArray"
        @all-sorts="allSorts"
      />
      <Slider :max="360" label="Items Count" v-model="barsArrayLength"/>
    </Sidebar>
    <MainView>
      <div v-if="currentView === 'SingleView'">
        <ColumnList :list="arrayInt"/>
      </div>
      <div class="grid grid-cols-4 grid-rows-3" v-if="currentView === 'MultiView'">
        <ColumnList
          v-for="sort in filteredSortingList"
          :id="sort.id"
          :list="arrayInt"
          :title="sort.name"
        />
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
      currentView: 'SingleView'
    };
  },
  watch: {
    barsArrayLength: "resetArray",
  },
  computed: {
    filteredSortingList() {
      return sortingList.filter(s => s.id && s.handler)
    }
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
    async allSorts() {
      this.currentView = 'MultiView'
      await this.delay(1000)
      this.filteredSortingList.forEach(sort => {
        this.handleSort(sort.id, sort.id, true)
      })
    },
    handleSort(type, id = '', isMulti) {
      if (!isMulti) this.currentView = 'SingleView'
      this.barsArrayElm = document.getElementsByClassName(`${id}column`);
      const arrCopy = this.arrayInt.slice();
      const sortType = this.filteredSortingList.find(sort => sort.id === type)
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
