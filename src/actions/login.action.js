import axios from "../helpers";
import { loginConstant } from "./constant";

export const login = (user) => {
	return async (dispatch) => {
		dispatch({
			type: loginConstant.LOGIN_REQUEST,
		});
		const res = await axios.post("/admin/signin", {
			...user,
		});

		if (res.status === 200) {
			const { token, user } = res.data;
			localStorage.setItem("token", token);
			localStorage.setItem("user", JSON.stringify(user));
			dispatch({
				type: loginConstant.LOGIN_SUCESS,
				payload: { token, user },
			});
		} else {
			if (res.data === 400) {
				dispatch({
					type: loginConstant.LOGIN_FAILURE,
					payload: { error: res.data.error },
				});
			}
		}
	};
};

export const isUserLogin = (user) => {
	return async (dispatch) => {
		const token = localStorage.getItem("token");

		if (token) {
			const user = JSON.parse(localStorage.getItem("user"));
			dispatch({
				type: loginConstant.LOGIN_SUCESS,
				payload: token,
				user,
			});
		} else {
			dispatch({
				type: loginConstant.LOGIN_FAILURE,
				payload: { error: "somethind went wrong" },
			});
		}
	};
};

export const logoutRequest = () => {
	return async (dispatch) => {
		dispatch({
			type: loginConstant.LOGOUT_REQUEST,
		});

		const res = await axios.post("/admin/signout");

		if (res.status === 200) {
			localStorage.clear();
			dispatch({
				type: loginConstant.LOGIN_SUCESS,
				// payload: { message },
			});
		} else {
			dispatch({
				type: loginConstant.LOGOUT_FAILURE,
				payload: { error: res.data.error },
			});
		}
	};
};

const login = () => {
	return async (dispatch) => {
		dispatch({
			type: loginConstant.LOGIN_REQUEST,
		});

		const res = await axios.post("/admin/signin", {
			...user,
		});
		if (res.status === 200) {
			const { token, user } = res.data;
			localStorage.setItem("token", token);
			localStorage.setItem("user", JSON.stringify("user"));
			dispatch({
				type: loginConstant.LOGIN_SUCESS,
				payload: {
					user,
					token,
				},
			});
		} else {
			if (res.status === 400) {
				dispatch({
					type: loginConstant.LOGIN_FAILURE,
					payload: {
						error: res.data.error,
					},
				});
			}
		}
	};
};
