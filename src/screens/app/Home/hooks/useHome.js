import { useEffect, useState } from 'react';

import useAlert from '@hooks/useAlert';
import useLoading, { TYPE_LOADING, TYPE_REFRESHING } from '@hooks/useLoading';
import { fetchPostsRequest } from '@services/api/posts';

const useHome = () => {
    const [posts, setPosts] = useState([]);
    const { loading, refreshing, handleLoading } = useLoading();
    const { handleError } = useAlert();

    const fetchPosts = async (type) => {
        try {
            await handleLoading(type, true);
            const response = await fetchPostsRequest();
            setPosts(response);
        } catch (err) {
            handleError(err.message);
        } finally {
            await handleLoading(type, false);
        }
    };

    const onRefresh = () => {
        fetchPosts(TYPE_REFRESHING);
    };

    useEffect(() => {
        fetchPosts(TYPE_LOADING);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        loading,
        refreshing,
        onRefresh,
        posts,
    };
};

export default useHome;
