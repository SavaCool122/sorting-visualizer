<template>
  <div class="app">
    <div class="controls">
      <div class="btn">
          <button @click="resetArray()">reset Array</button>
          <button @click="QuiqSort()">Quiq Sort</button>
          <button @click="MergeSort()">Merge Sort</button>
          <button @click="testArraySorting()">Test Array</button>
      </div>
      <div class="slider">
          <label>Count of Array Elements</label>
          <input v-model="NUMBER_OF_ARRAY_BARS" type="range" min="0" max="180" style="background: white none repeat scroll 0% 0%; cursor: pointer;">
      </div>
    </div>
    <div class="array">
      <ul class="arrayContainer">
        <li
                class="column"
                v-for="(number, xid) in arrayInt"
                :key="xid"
                :style="{ height: number + 'px', backgroundColor: PRIMARY_COLOR}"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getMergeSortAnimations } from '../MergeSort'
import { qSortHelper } from '../QuiqSort'
export default {
  data() {
    return {
      isShowing: false,
      arrayInt: [],
      ANIMATION_SPEED_MS: 8,
      NUMBER_OF_ARRAY_BARS: 200,
      PRIMARY_COLOR: '#E0DFD5',
      SECONDARY_COLOR: '#e43f5a',
      SELECT_COLOR: 'yellowgreen',
      PIVOT_COLOR: '#35d0ba'
    }
  },
  watch: {
    NUMBER_OF_ARRAY_BARS: function () {
      this.resetArray()
    }
  },
  methods: {
     daley(time) {
       return new Promise((resolve) => setTimeout(resolve, time))
    },
    resetArray() {
      this.arrayInt = []
      for (let i = 0; i < this.NUMBER_OF_ARRAY_BARS; i++) {
        this.arrayInt.push(this.randomIntFromInterval(5, 550))
      }
    },
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    testArraySorting() {
        const arrayBars = document.getElementsByClassName('column')
        const allOperations = []
        for(let idx = 0; idx < this.arrayInt.length; idx++) {
            if (idx === 0) {
                arrayBars[idx].style.backgroundColor = 'green'
                continue
            }
            if (this.arrayInt[idx-1] <= this.arrayInt[idx]) {
                const time = this.daley(idx * this.ANIMATION_SPEED_MS)
                    .then(() => {
                        arrayBars[idx].style.backgroundColor = 'green'
                        return this.daley()
                    })
                allOperations.push(time)
            } else {
               arrayBars[idx].style.backgroundColor = 'red'
               break
            }
        }
        Promise.all(allOperations).then(() => {
            for(let idx = 0; idx < this.arrayInt.length; idx++) {
                this.daley(300).then(() => {
                    return this.daley(idx * this.ANIMATION_SPEED_MS)
                        .then(() => {
                            arrayBars[idx].style.backgroundColor = this.PRIMARY_COLOR
                        })
                })
            }
        })
    },
    MergeSort() {
      const animations = getMergeSortAnimations(this.arrayInt)
      const arrayBars = document.getElementsByClassName('column')
        const allOperation = []
      for (let i = 0; i < animations.length; i++) {
        const isColorChange = i % 3 !== 2
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i]
          const barOneStyle = arrayBars[barOneIdx].style
          const barTwoStyle = arrayBars[barTwoIdx].style
          const color = i % 3 === 0 ? this.SECONDARY_COLOR : this.PRIMARY_COLOR
          const anim = this.daley(i * this.ANIMATION_SPEED_MS).then(() => {
            barOneStyle.backgroundColor = color
            barTwoStyle.backgroundColor = color
          })
          allOperation.push(anim)
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i]
            const barOneStyle = arrayBars[barOneIdx].style
            barOneStyle.height = `${newHeight}px`
          }, i * this.ANIMATION_SPEED_MS)
        }
      }
      Promise.all(allOperation).then(() => this.testArraySorting())
    },
   QuiqSort() {
      const animations = qSortHelper(this.arrayInt)
      const arrayBars = document.getElementsByClassName('column')
      let pivotTemp = null
       const allOperations = []
          for (let i = 0; i < animations.length; i++) {
              if (animations[i].length > 0) {
                  const [barOneIdx, pivotIdx, barTwoIdx] = animations[i]
                  const barOneStyle = arrayBars[barOneIdx].style
                  const barTwoStyle = arrayBars[barTwoIdx].style
                  pivotTemp = pivotIdx
                  const barPivotStyle = arrayBars[pivotIdx].style
                   const anim = this.daley(i * this.ANIMATION_SPEED_MS).then(() => {
                      barPivotStyle.backgroundColor = this.PIVOT_COLOR
                      barOneStyle.backgroundColor = this.SECONDARY_COLOR
                      barTwoStyle.backgroundColor = this.SECONDARY_COLOR
                      setTimeout(() => {
                          barOneStyle.backgroundColor = this.PRIMARY_COLOR
                          barTwoStyle.backgroundColor = this.PRIMARY_COLOR
                      },this.ANIMATION_SPEED_MS / 2)
                      const temp = barOneStyle.height
                      barOneStyle.height = barTwoStyle.height
                      barTwoStyle.height = temp
                  })
                  allOperations.push(anim)
              } else {
                  const barPivotStyle = arrayBars[pivotTemp].style
                  setTimeout(() => {
                      barPivotStyle.backgroundColor = this.PRIMARY_COLOR
                  }, i * this.ANIMATION_SPEED_MS)
              }

          }
          Promise.all(allOperations).then(() => this.testArraySorting())
    },
  },
  created() {
    this.resetArray()
  },
}
</script>

<style>
:root {
    --gray0: #f8f8f8;
    --gray5: #2a2e35;
    --gray6: #12181b;
    --bg-nav: linear-gradient(to right, var(--gray5), var(--gray6));
    --bg: var(--gray5);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

*, *:before, *:after {
    box-sizing: border-box;
}

body {
    background: var(--bg);
    color: var(--gray0);
}

.app {
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-columns: 200px 1fr;
}

.arrayContainer {
    margin-left: 50px;
    position: absolute;
    top: 0;
    bottom: 10px;
    display: flex;
    flex-direction: row;
    transform: scale(1, -1);
}

.arrayContainer li {
  margin-top: 2px;
  margin-left: 3px;
  display: block;
  width: 0.2rem;
}

.controls {
    background: var(--bg-nav);
}

.controls .btn{
    display: flex;
    flex-direction: column;
    align-items: center;

}
.controls button{
    background: white;
    border: 0.125em solid black;
    cursor: pointer;
    font: 600 1.2rem 'Montserrat', sans-serif;
    margin: 0.5rem;
    padding: 0.5em 0.75em;
    position: relative;
    text-transform: uppercase;
}

.controls button:before, .controls button:after {
    content: '';
    position: absolute;
    transition: all 0.125s ease-in-out;
}

.controls button:before {
    background: black;
    border: 0 dashed black;
    left: -0.125em;
    top: -0.125em;
    right: -0.125em;
    bottom: -0.125em;
    z-index: -1;
}

.controls button:hover:before, .controls button.cut:focus:before {
    background: white;
    border-width: 0.125em;
}



.slider {
    font: 600 1.2rem 'Montserrat', sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}


</style>


