const basicMiddleware = (resp) => {
    const { data } = resp || {};

    if (data) {
        return data;
    }

    throw new Error('Could not namespace JSON');
};

const errorMiddleware = () => {
    throw new Error('An error occur during the request. Please, try it again.');
};

export { basicMiddleware, errorMiddleware };
