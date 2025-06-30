<script setup>
import {useDataStore} from "../../stores/dataStore";
import CategoryCount from "@/components/CategoryCount.vue";
import {ref} from "vue";
import StoreDetail from "@/components/StoreDetail.vue";

const store = useDataStore()
/* global defineProps */
defineProps({
  categoryName: String
})

const showDetail = ref(false);

const showProducts = () => {
  showDetail.value = !showDetail.value
}

</script>

<template>
  <tr>
    <td @click="showProducts" :class="{'text-primary': showDetail}">{{ categoryName }}</td>
    <category-count class="text-center" v-for="storeName in store.storeNames" :store="storeName" :category="categoryName"
                :key="`${storeName}-${categoryName}`"/>
  </tr>
  <store-detail v-if="showDetail" :category-name="categoryName"/>
</template>

<style scoped>
</style>