<script setup>
import {useDataStore} from "../../stores/dataStore";
import ProductCount from "@/components/ProductCount.vue";

const {storeNames} = useDataStore()
/* global defineProps */
const props = defineProps({
  product: String
})



</script>

<template>
  <tr>
    <td>
      <span class="ml-5">
        {{ props.product }}
      </span>
    </td>
    <product-count class="text-center" v-for="store in storeNames" :product="props.product" :store="store" :key="`${props.product}-${store}`"></product-count>
  </tr>
</template>

<style scoped>

</style>