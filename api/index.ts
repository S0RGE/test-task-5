import type { Post } from './types';

const BASE_URL = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/'

async function getPostList(): Promise<Post[]> {
    try {
        const response = await fetch(`${BASE_URL}posts`);
        const data: Post[]  = await response.json();
        return data;
    } catch (e: unknown) {
        console.log(e);
        return [];
    }
}

async function getPostById(id: string): Promise<Post> {
    try {
        const response = await fetch(`${BASE_URL}posts/${id}`);
        const data: Post = await response.json();
        return data;
    } catch (e: unknown) {
        console.log(e);
        return {} as Post;
    }
}

export {
    getPostList,
    getPostById
}