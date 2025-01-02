import { Alert } from 'react-native';

const useAlert = () => {
    const handleError = (error) => {
        let msg = typeof error === 'object' ? error.message : error;
        showAlert('Warning', msg);
    };

    const showAlert = (title, message) => {
        Alert.alert(title, message);
    };

    return {
        handleError,
    };
};

export default useAlert;
