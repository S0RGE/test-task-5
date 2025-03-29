import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Post } from '~/api/types'
import { fetchPostList } from "~/api";

export const usePostListStore = defineStore('usePostList', () => {
    const posts = ref<Post[]>([])
    const isLoading = ref(false)
    const error = ref<Error | null>(null)

    const getPostList = async () => {
        if (posts.value.length) {
            return;
        }

        try {
            isLoading.value = true
            posts.value = await fetchPostList()
        } catch (e) {
            error.value = e as Error
            posts.value = []
        } finally {
            isLoading.value = false
        }
    }

    return {
        posts,
        isLoading,
        error,
        getPostList
    }
})
