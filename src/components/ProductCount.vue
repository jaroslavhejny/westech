<script setup>
import {useDataStore} from "../../stores/dataStore";
import ProductInStoreCountWorker from 'worker-loader!@/worker/productInStoreCount.worker'
import {ref, toRaw} from "vue";
import WLoader from "@/components/WLoader.vue";

const {allData} = useDataStore()
/* global defineProps */
const props = defineProps({
  product: String,
  store: String,
})

const totalItems = ref(undefined);
const isLoading = ref(false);
const productInStoreCountWorker = new ProductInStoreCountWorker();
isLoading.value = true;
productInStoreCountWorker.postMessage({allData: toRaw(allData), product: props.product, store: props.store});
productInStoreCountWorker.onmessage = ({data}) => {
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