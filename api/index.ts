const BASE_URL = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/'

const fetchPostList = (): Promise<Response> => fetch(`${BASE_URL}posts`);

const fetchPostById = (id: number | string): Promise<Response> => fetch(`${BASE_URL}posts/${id}`);

export {
    fetchPostList,
    fetchPostById
}