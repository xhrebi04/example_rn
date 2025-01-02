const useDelay = () => {
    const wait = (delay = 1000) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), delay);
        });
    };

    return {
        wait,
    };
};

export default useDelay;
