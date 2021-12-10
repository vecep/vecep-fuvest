import Axios from 'axios';
import getApiUrl from 'utils/getApiUrl';

const API_URL = getApiUrl();

export const getTotal = async () => {
	const { data } = await Axios.get(API_URL + '/exercises/total'
	);
	return data;
};
