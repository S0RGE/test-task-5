import { ref, computed, watch } from 'vue'

export interface PaginationOptions {
    itemsPerPage: number
    initialPage: number
    totalItems: number
}

export function usePagination(options: PaginationOptions = {
    itemsPerPage: 8,
    initialPage: 1,
    totalItems: 0,
}) {
    const {
        itemsPerPage,
        initialPage,
        totalItems,
    } = options

    const currentPage = ref(initialPage)
    const perPage = ref(itemsPerPage)
    const total = ref(totalItems)

    const totalPages = computed(() => {
        return Math.ceil(total.value / perPage.value)
    })

    const offset = computed(() => {
        return (currentPage.value - 1) * perPage.value
    })

    function goToPage(page: number) {
        if (page >= 1 && page <= totalPages.value) {
            currentPage.value = page
        }
    }

    function updateItemsPerPage(newPerPage: number) {
        perPage.value = newPerPage
        currentPage.value = 1
    }

    watch(total, () => {
        if (currentPage.value > totalPages.value) {
            currentPage.value = totalPages.value > 0 ? totalPages.value : 1
        }
    })

    return {
        currentPage,
        perPage,
        total,

        totalPages,
        offset,

        goToPage,
        updateItemsPerPage,
    }
}