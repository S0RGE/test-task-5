import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Post } from '~/api/types'
import { fetchPostList } from "~/api";

export const usePostListStore = defineStore('usePostList', () => {
    const posts = ref<Post[]>([])

    const getPostList = async () => {
        if (posts.value.length) {
            return;
        }

        try {
            const response: Response = await fetchPostList();
            const data: Post[] = await response.json();
            if (!data || !Array.isArray(data)) {
                throw createError({
                    statusCode: 404,
                    statusMessage: 'Page not found'
                });
            }
            posts.value = data;
            return data;
        } catch (e: unknown) {
            console.log('Error',e);
            throw createError({
                statusCode: 404,
                statusMessage: 'Page not found'
            })
        }
    }

    return {
        posts,
        getPostList
    }
})
