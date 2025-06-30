import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useSortStore = defineStore('sort', () => {
    const sortByName = ref(undefined);
    const sortAscending = ref(null);
    const setSortByName = (name) => {
        sortByName.value = name
    }

    const setSortAsending = (forceSort) => {
        if (forceSort){
            sortAscending.value = 'asc'
            return
        }
        if (sortAscending.value === 'asc') sortAscending.value = 'desc'
        else if (sortAscending.value === 'desc') sortAscending.value = null
        else sortAscending.value = 'asc'
    }

    return {
        setSortByName,
        setSortAsending,
        sortByName,
        sortAscending
    }
})