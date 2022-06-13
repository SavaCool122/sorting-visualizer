<template>
  <div class="grid grid-cols-5 min-h-full">
    <Sidebar
      @change-status="handleChangeStatus"
      :selected-sort="appConfig.sort"
      v-model:bars-array-length="barsArrayLength"
    />
    <MainView>
      <ColumnList :list="arrayInt"/>
    </MainView>
  </div>
</template>

<script>
import Sidebar from "../sidebar/components/Sidebar.vue";
import ColumnList from "../sort-columns/components/ColumnList.vue"
import MainView from "./MainView.vue";
import {getRandomArray, getInitialAppConfig} from "../utils";
import {handleSort} from '../sortAnimation'
import {STATUSES} from '../constants'

export default {
  components: {
    MainView,
    Sidebar,
    ColumnList,
  },
  data() {
    return {
      barsArrayLength: 15,
      appConfig: getInitialAppConfig()
    };
  },
  computed: {
    arrayInt() {
      return getRandomArray(this.barsArrayLength)
    }
  },
  methods: {
    async handleChangeStatus(appConfig) {
      this.appConfig = appConfig

      if (STATUSES.SORT === appConfig.status) {
        await handleSort(appConfig.sort, this.arrayInt)
        console.log('SORT END') // TODO Проверка что массив отсортирован правильно
        this.appConfig = getInitialAppConfig()
      }
    },
  },
};
</script>
