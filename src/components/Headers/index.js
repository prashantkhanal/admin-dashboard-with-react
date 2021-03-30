import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequest } from "../../actions";

/**
 * @author prashant khanal
 * @function Headers
 **/

const Headers = (props) => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const signoutRequest = () => {
		dispatch(logoutRequest());
	};
	const LoggedInUser = () => {
		return (
			<li className='nav-item'>
				<span
					className='nav-link'
					onClick={signoutRequest}
					// style={{ cursor: 'pointer' }}
				>
					Logout
				</span>
			</li>
		);
	};

	const notLoggedInUser = () => {
		return (
			<>
				<li className='nav-item'>
					<NavLink to='signin' className='nav-link'>
						signin
					</NavLink>
				</li>
				{/* <li className='nav-item'>
					<NavLink to='/signup' className='nav-link '></NavLink>
				</li> */}
			</>
		);
	};

	return (
		<Navbar bg='dark' variant='dark' expand='lg' style={{ zIndex: "1000" }}>
			<Container fluid>
				<Link to='/' className='navbar-brand'>
					Admin dashboard
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						{/* {auth.authenticate ? LoggedInUser() : notLoggedInUser()} */}
						{auth.authenticate ? LoggedInUser() : notLoggedInUser()}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Headers;
