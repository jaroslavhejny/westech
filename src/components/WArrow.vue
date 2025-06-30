<script setup>
import {useSortStore} from "../../stores/sortStore";
import {computed} from "vue";

const sortStore = useSortStore();

const arrow = computed(()=>{
  const ascending = sortStore.sortAscending;
  return ascending === 'asc' ? '↑' : '↓'
})
</script>

<template>
<span v-if="sortStore.sortAscending">{{arrow}}</span>
</template>

<style scoped>

</style>