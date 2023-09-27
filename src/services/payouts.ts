import { AxiosInstance } from 'utils';
import { API_URLS } from 'helpers';

const { PAYOUTS, SEARCH } = API_URLS;

export const getPayouts = () => AxiosInstance.get(PAYOUTS);

export const search = (params: any) => AxiosInstance.get(SEARCH, params);
