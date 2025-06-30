<script setup>
import TableHeader from "@/components/TableHeader.vue";
import TableRow from "@/components/TableRow.vue";
import {useDataStore} from "../../stores/dataStore";
import {useSortStore} from "../../stores/sortStore";
import {computed} from "vue";

const store = useDataStore();
const sortStore = useSortStore();

const sort = computed(() => {
  const ascending = sortStore.sortAscending;
  if (!sortStore.sortByName || !ascending) {
    return [...store.categories]
  }
  const storeName = sortStore.sortByName;
  const counts = store.categoriesWithProductCount;
  let sortedCategories = [...store.categories];
  sortedCategories.sort((a, b) => {
    return ascending === "asc" ? counts[a][storeName] - counts[b][storeName] : counts[b][storeName] - counts[a][storeName]
  })
  return sortedCategories;
})


</script>

<template>
  <table class="table m-3 table-fixed">
    <table-header :header-titles="store.storeNames"/>
    <table-row :row-names="sort"/>
  </table>
</template>

<style scoped>
.table-fixed {
  table-layout: fixed;
  width: 100%;
}
</style>