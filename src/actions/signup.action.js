import axios from '../helpers';
import { signupConstant } from './constant';

export const signup = (user) => {
	return async (dispatch) => {
		dispatch({
			type: signupConstant.SIGNUP_REQUEST,
		});
		const res = await axios.post(`/admin/signup`, {
			...user,
		});

		if (res.status === 201) {
			const { message } = res.data;
			dispatch({
				type: signupConstant.SIGNUP_SUCESS,
				payload: {
					message,
				},
			});
		} else {
			dispatch({
				type: signupConstant.SIGNUP_FAILURE,
				// payload: { error: res.data.error },
			});
		}
	};
};
