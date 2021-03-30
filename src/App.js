import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import Signin from "./containers/Signin";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLogin } from "./actions";
import Order from "./containers/Orders";
import Product from "./containers/Products";
import Category from "./containers/Category";

function App() {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!auth.authenticate) {
			dispatch(isUserLogin());
		}
	}, []);
	return (
		<>
			<Switch>
				<PrivateRoute exact path='/' component={Home} />
				<PrivateRoute path='/category' component={Category} />
				<PrivateRoute path='/product' component={Product} />
				<PrivateRoute path='/order' component={Order} />
				<PrivateRoute path='/signin' component={Signin} />
				<Route path='/signup' component={Signup} />
			</Switch>
		</>
	);
}

export default App;
