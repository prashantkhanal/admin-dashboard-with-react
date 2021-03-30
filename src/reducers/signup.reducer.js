import { signupConstant } from "../actions/constant";

const initState = {
	message: "",
	error: null,
	loading: false,
};

export default (state = initState, action) => {
	console.log(action);

	switch (action.type) {
		case signupConstant.SIGNUP_REQUEST:
			state = {
				...state,
				loading: true,
			};
			break;
		case signupConstant.SIGNUP_SUCESS:
			state = {
				...state,
				loading: false,
				message: action.payload.message,
			};
			break;
		case signupConstant.SIGNUP_FAILURE:
			state = {
				...state,
				loading: false,
			};
	}
	return state;
};
