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
            isLoading.value = true;
            const data = await fetchPostList();
            posts.value = data;
            return data;
        } catch (e) {
            error.value = e as Error;
            posts.value = [];
            throw e;
        } finally {
            isLoading.value = false;
        }
    }

    return {
        posts,
        isLoading,
        error,
        getPostList
    }
})
