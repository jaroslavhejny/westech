<script setup>
import { onMounted } from 'vue'
import { useDataStore } from '/stores/dataStore'
import WTable from "@/components/WTable.vue";
import storeNameWorker from "worker-loader!@/worker/storeName.worker"
import categoryNameWorker from "worker-loader!@/worker/category.worker"
import WLoader from "@/components/WLoader.vue";
const store = useDataStore()

onMounted(async () => {
  store.setLoading(true);
  const data = await fetch(process.env.VUE_APP_URL);
  const productData = await data.json();
  store.setAllData(productData);
  const storeName = new storeNameWorker();
  const category = new categoryNameWorker();
  storeName.postMessage(productData);
  storeName.onmessage = ({data}) => {
    store.setStoreNames(data);
  }
  category.postMessage(productData);
  category.onmessage = ({data}) => {
    store.setCategories(data)
    store.setLoading(false);

  }
})
</script>

<template>
  <WLoader v-if="store.loading" />
  <div v-else-if="store.error">Chyba: {{ store.error }}</div>
  <W-Table v-else />
</template>