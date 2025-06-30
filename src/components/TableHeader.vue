<script setup>
import {useSortStore} from "../../stores/sortStore";
import WArrow from "@/components/WArrow.vue";
/* global defineProps */
const props = defineProps({
  headerTitles: Array
})

const setStore = useSortStore();
const sortByStore = (storeName) => {
  if (storeName === setStore.sortByName) {
    setStore.setSortAsending();
  }
  else {
    setStore.setSortByName(storeName);
    setStore.setSortAsending(true);
  }
}
</script>

<template>
  <th class="w-25"></th>
  <th class="text-center pointer" v-for="header in props.headerTitles" @click="sortByStore(header)" :key="header">
    {{ header }}
    <WArrow v-if="setStore.sortByName === header"/>
  </th>
</template>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>