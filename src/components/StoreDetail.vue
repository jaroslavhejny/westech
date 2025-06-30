<script setup>
import {useDataStore} from "../../stores/dataStore";

const {allData} = useDataStore()
/* global defineProps */
const props = defineProps({
  categoryName: String
})
import ProductWorker from 'worker-loader!@/worker/product.worker'
import {ref, toRaw} from "vue";
import ProductRow from "@/components/ProductRow.vue";
import WLoader from "@/components/WLoader.vue";

const allProducts = ref(undefined);
const isLoading = ref(false);

const productWorker = new ProductWorker();

productWorker.postMessage({allData: toRaw(allData), category: props.categoryName});
isLoading.value = true;
productWorker.onmessage = ({data}) => {
  allProducts.value = data.uniqueProducts;
  isLoading.value = false
}


</script>

<template>
  <product-row v-for="product in allProducts" :product="product" :key="product" />
  <WLoader v-if="isLoading || !allProducts" />
</template>

<style scoped>

</style>