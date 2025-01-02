import { useState } from 'react';

import useDelay from './useDelay';

export const TYPE_LOADING = 'LOADING';
export const TYPE_REFRESHING = 'REFRESHING';

const useLoading = () => {
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const { wait } = useDelay();

    const handleLoading = async (type, value) => {
        switch (type) {
            case TYPE_LOADING:
                setLoading(value);
                break;
            case TYPE_REFRESHING:
                setRefreshing(value);
                if (value) {
                    await wait();
                }
                break;
        }
    };

    return {
        handleLoading,
        loading,
        refreshing,
    };
};

export default useLoading;
