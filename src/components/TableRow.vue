<script setup>
/* global defineProps */
import CategoryRow from "@/components/CategoryRow.vue";

const props = defineProps({
  rowNames: Array
})

</script>

<template>
    <category-row v-for="name in props.rowNames" :key="name" :category-name="name" />
</template>

<style scoped>

</style>