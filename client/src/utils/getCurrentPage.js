import { useLocation } from 'react-router-dom';

export const getCurrentPage = () => {
	const location = useLocation();

	const root_path = location.pathname.match(/\/\w*/g).shift();

	return { root_path };
};
