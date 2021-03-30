import { loginConstant } from "../actions/constant";

const initState = {
	token: null,
	user: {
		firstName: "",
		lastName: "",
		email: "",
	},
	authenticate: false,
	authenticating: false,
	loading: false,
	error: null,
	message: "",
};

export default (state = initState, action) => {
	console.log(action);

	switch (action.type) {
		case loginConstant.LOGIN_REQUEST:
			state = {
				...state,
				authenticating: true,
			};
			break;
		case loginConstant.LOGIN_SUCESS:
			state = {
				...state,
				user: action.payload.user,
				token: action.payload.token,
				authenticate: true,
				authenticating: false,
			};
			break;

		case loginConstant.LOGOUT_REQUEST:
			state = {
				...state,
				loading: true,
			};
		case loginConstant.LOGOUT_SUCESS:
			state = {
				...initState,
			};
			break;

		case loginConstant.LOGOUT_FAILURE:
			state = {
				...state,
				error: action.payload.error,
				loading: false,
			};
			break;
	}
	return state;
};

const initState = {
	email: "",
	password: "",
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case loginConstant.LOGIN_REQUEST:
			state = {
				...state,
				loading: true,
			};
			break;
		case loginConstant.LOGIN_SUCESS:
			state = {
				...state,
				user: action.payload.user,
				token: action.payload.token,
				loading: false,
			};
			break;
		case loginConstant.LOGIN_FAILURE:
			state = {
				...state,
				error: action.payload.error,
			};
			break;
	}
	return state;
};
