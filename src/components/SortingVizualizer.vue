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
    testArraySorting() {
      const allOperations = [];
      for (let idx = 0; idx < this.arrayInt.length; idx++) {
        if (idx === 0) {
          this.barsArrayElm[idx].style.backgroundColor = "green";
          continue;
        }
        if (this.arrayInt[idx - 1] <= this.arrayInt[idx]) {
          const time = this.delay(idx * ANIMATION_SPEED).then(() => {
            this.barsArrayElm[idx].style.backgroundColor = "green";
          });
          allOperations.push(time);
        } else {
          this.barsArrayElm[idx].style.backgroundColor = "red";
          break;
        }
      }
      Promise.all(allOperations).then(() => {
        for (let idx = 0; idx < this.arrayInt.length; idx++) {
          this.delay(300).then(() => {
            return this.delay(idx * ANIMATION_SPEED).then(() => {
              this.barsArrayElm[idx].style.backgroundColor = this.PRIMARY_COLOR;
            });
          });
        }
      });
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

          const animationStep = this.delay(idx * ANIMATION_SPEED)
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
    MergeSort() {
      animations.forEach((animation, idx) => {
        const isColorChange = idx % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animation;
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color =
            idx % 3 === 0 ? this.SECONDARY_COLOR : this.PRIMARY_COLOR;
          const animationStep = this.delay(idx * ANIMATION_SPEED).then(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          });
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animation;
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, idx * ANIMATION_SPEED);
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
        @testArray="testArraySorting"
      />
      <div>
        <label>Count of Array Elements</label>
        <input v-model="barsArrayLength" type="range" min="0" max="180" />
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
