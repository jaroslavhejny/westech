<script setup>
import {useDataStore} from "../../stores/dataStore";
import storeCountWorker from 'worker-loader!@/worker/storeCount.worker'
import {ref, toRaw} from "vue";
import WLoader from "@/components/WLoader.vue";

const {allData, setCategoriesWithProductCount} = useDataStore()
/* global defineProps */
const props = defineProps({
  category: String,
  store: String,
})

const totalItems = ref(undefined);
const isLoading = ref(false);

const storeCount = new storeCountWorker();
isLoading.value = true;
storeCount.postMessage({allData: toRaw(allData), category: props.category, store: props.store});
storeCount.onmessage = ({data}) => {
  setCategoriesWithProductCount({category: props.category, count: data.total, store: props.store})
  totalItems.value = data.total;
  isLoading.value = false
}

</script>

<template>
  <td v-if="isLoading"><WLoader /></td>
  <td v-else> {{ totalItems }}</td>
</template>

<style scoped>

</style>