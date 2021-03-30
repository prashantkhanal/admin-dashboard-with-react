import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import signupReducer from "./signup.reducer";
// import category from "./category.reducer";
// import product from "./product.reducer";
// import order from "./order.reducers";

export const rootReducer = combineReducers({
	auth: loginReducer,
	// login: signupReducer,
});
