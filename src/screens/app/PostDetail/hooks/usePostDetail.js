import { useEffect, useState } from 'react';

import useAlert from '@hooks/useAlert';
import useLoading, { TYPE_LOADING } from '@hooks/useLoading';
import { fetchPostRequest } from '@services/api/posts';

const usePostDetail = (postId) => {
    const [post, setPost] = useState(undefined);
    const { loading, handleLoading } = useLoading();
    const { handleError } = useAlert();

    const fetchPost = async () => {
        try {
            await handleLoading(TYPE_LOADING, true);
            const response = await fetchPostRequest(postId);
            setPost(response);
        } catch (err) {
            handleError(err.message);
        } finally {
            await handleLoading(TYPE_LOADING, false);
        }
    };

    useEffect(() => {
        fetchPost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        loading,
        post,
    };
};

export default usePostDetail;
