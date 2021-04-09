<script>
import {
  ANIMATION_SPEED,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SELECT_COLOR,
  PIVOT_COLOR,
} from "../constant/index";
import sortHandlers from "../constant/sortMethods.js";

import randomIntFromInterval from "../utils/randomIntFromInterval";
import SaSortButtons from "./SaSortButtons.vue";

export default {
  components: { SaSortButtons },
  data() {
    return {
      arrayInt: [],
      barsArrayElm: [],
      barsArrayLength: 200,
      ANIMATION_SPEED,
      PRIMARY_COLOR,
      SECONDARY_COLOR,
      SELECT_COLOR,
      PIVOT_COLOR,
    };
  },

  watch: {
    barsArrayLength: "resetArray",
  },

  methods: {
    delay(time = 0) {
      return new Promise(resolve => setTimeout(resolve, time));
    },
    resetArray() {
      this.arrayInt = Array.from({ length: this.barsArrayLength }, () =>
        randomIntFromInterval(5, 550)
      );
    },
    handleSort(sortType) {
      const arrCopy = this.arrayInt.slice();
      const animationToSortArray = sortHandlers[sortType](arrCopy);
      this.playSortAnimation(animationToSortArray);
    },
    playSortAnimation(animations) {
      let pivotTemp = null;
      animations.forEach((animation, idx) => {
        const [barOneIdx, pivotIdx, barTwoIdx] = animation;
        if (barOneIdx >= 0 && pivotIdx >= 0 && barTwoIdx >= 0) {
          const barOneStyle = this.barsArrayElm[barOneIdx].style;
          const barTwoStyle = this.barsArrayElm[barTwoIdx].style;
          pivotTemp = pivotIdx;
          const barPivotStyle = this.barsArrayElm[pivotIdx].style;

          this.delay(idx * ANIMATION_SPEED)
            .then(() => {
              barPivotStyle.backgroundColor = this.PIVOT_COLOR;
              barOneStyle.backgroundColor = this.SECONDARY_COLOR;
              barTwoStyle.backgroundColor = this.SECONDARY_COLOR;
              return this.delay(ANIMATION_SPEED / 2);
            })
            .then(() => {
              const temp = barOneStyle.height;
              barOneStyle.height = barTwoStyle.height;
              barTwoStyle.height = temp;
              return this.delay(ANIMATION_SPEED / 4);
            })
            .then(() => {
              barOneStyle.backgroundColor = this.PRIMARY_COLOR;
              barTwoStyle.backgroundColor = this.PRIMARY_COLOR;
            });
        } else {
          const barPivotStyle = this.barsArrayElm[pivotTemp].style;
          this.delay(idx * ANIMATION_SPEED).then(() => {
            barPivotStyle.backgroundColor = this.PRIMARY_COLOR;
          });
        }
      });
    },
  },

  created() {
    this.resetArray();
    this.barsArrayElm = document.getElementsByClassName("column");
  },
};
</script>

<template>
  <div class="grid grid-cols-5 min-h-full">
    <div class="col-start-1 min-h-screen col-end-1 bg-gray-300">
      <SaSortButtons
        :bars="arrayInt"
        @sortType="handleSort"
        @resetArray="resetArray"
      />
      <div class="text-center">
        <label>Count of Array Elements</label>
        <input
          v-model="barsArrayLength"
          type="range"
          min="0"
          max="180"
        />
      </div>
    </div>
    <div class="col-span-4 bg-gray-800">
      <div class="min-h-screen p-3 grid grid-flow-col items-end gap-1">
        <div
          v-for="(number, xid) in arrayInt"
          :key="xid"
          :style="{ height: number + 'px', backgroundColor: PRIMARY_COLOR }"
          class="column"
        ></div>
      </div>
    </div>
  </div>
</template>
