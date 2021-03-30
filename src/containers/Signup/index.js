import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import Input from '../../components/UI/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions';

/**
 * @author prashant khanal
 * @function Signup
 **/

const Signup = (props) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch('');

	const signupRequest = (e) => {
		e.preventDefault();
		const user = {
			firstName,
			lastName,
			email,
			password,
		};
		dispatch(signup(user));
	};

	return (
		<Layout>
			<Container>
				<Row style={{ margin: 'auto', marginTop: '50px' }}>
					<Col md={{ span: 4, offset: 4 }}>
						<Form onSubmit={signupRequest}>
							<Input
								label='First Name'
								placeholder='Enter your firstname'
								type='text'
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
							<Input
								label='Last name'
								placeholder='Enter your Lastname'
								type='text'
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
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
								Signin
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default Signup;
