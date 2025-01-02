import { apiClient } from './client';
import { basicMiddleware, errorMiddleware } from './middleware';

const fetchPostsRequest = () =>
    apiClient.get('/posts').then(basicMiddleware).catch(errorMiddleware);

const fetchPostRequest = (postId) =>
    apiClient
        .get(`/posts/${postId}`)
        .then(basicMiddleware)
        .catch(errorMiddleware);

export { fetchPostsRequest, fetchPostRequest };
