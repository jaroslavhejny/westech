import {defineStore} from 'pinia'
import {reactive, ref} from 'vue'

export const useDataStore = defineStore('data', () => {
    const allData = ref(null);
    const storeNames = ref(null)
    const categories = ref([])
    const loading = ref(false)
    const error = ref(null);
    const categoriesWithProductCount = reactive({})

    const setAllData = (event) => {
        allData.value = event
    }
    const setStoreNames = (event) => {
        storeNames.value = event;
    }

    const setCategories = (event) => {
        categories.value = event;
    }

    const setLoading = (isLoading) => {
        loading.value = isLoading;
    }

    const setCategoriesWithProductCount = ({category, store, count}) => {
        categoriesWithProductCount[category] = categoriesWithProductCount[category] || {};
        categoriesWithProductCount[category][store] = count;
    }




    return {
        storeNames,
        loading,
        error,
        setStoreNames,
        setLoading,
        setCategories,
        categories,
        setAllData,
        allData,
        categoriesWithProductCount,
        setCategoriesWithProductCount,
    }
})