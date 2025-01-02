import axios from 'axios';
import Config from 'react-native-config';

const baseURL = Config.API_URL;

const baseHeaders = {
    Accept: 'application/json',
};

const apiClient = axios.create({
    baseURL,
    headers: baseHeaders,
});

export { apiClient };
