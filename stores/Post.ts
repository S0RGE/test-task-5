import { defineStore } from 'pinia'
import { fetchPostById } from "~/api"
import type { Post } from '~/api/types'
import { instanceOf } from '#imports'

export const usePostStore = defineStore('usePost', () => {
    const post = ref<Post>()

    const getPostById = async (id: string | number) => {
        try {
            const response: Response = await fetchPostById(id);
            const data: Post = await response.json();
         
            if (!data || !instanceOf<Post>(data, 'id')) {
                throw createError({
                    statusCode: 404,
                    statusMessage: 'Post not found'
                });
            }
            post.value = data
            return data;
        } catch (e: unknown) {
            console.log('Error',e);
            throw createError({
                statusCode: 404,
                statusMessage: 'Post not found'
            })
        }
    }

    return {
        post,
        getPostById
    }
})