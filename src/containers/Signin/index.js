import React, { useState } from 'react';
import { Col, Container, Form, Row, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import {login } from '../../actions';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input/Input';

/**
 * @author Prashant khanal
 * @function Sigin
 **/
const Signin = (props) => {

	const [email, setEmail] = useState('');
	
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	// const dispatch = useDispatch();
	// const auth = useSelector((state) => state.auth);
	// const loginUser = (e) => {
	// 	e.preventDefault();
		const user = {
			email,
			password,
		};
		dispatch(login(user));
	};

	if (auth.authenticate) {
		return <Redirect to='/' />;
	}

	return (
		<Layout>
			<Container>
				<Row style={{ margin: 'auto', marginTop: '50px' }}>
					<Col md={{ span: 4, offset: 4 }}>
						<Form onSubmit={loginUser}>
							{auth.authenticating ? (
								<Spinner animation='border' variant='danger' />
							) : (
								''
							)}
							<Input
								label='Email'
								placeholder='Enter your Email'
								type='text'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Input
								label='Password'
								placeholder='Enter your password'
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Button
								variant='danger'
								type='submit'
								style={{ marginTop: '10px' }}
							>
								Login
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default Signin;
