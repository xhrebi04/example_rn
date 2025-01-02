import { apiClient } from './client';
import { basicMiddleware, errorMiddleware } from './middleware';

const fetchPostsRequest = () =>
    apiClient.get('/posts').then(basicMiddleware).catch(errorMiddleware);

export { fetchPostsRequest };
