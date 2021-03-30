import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Headers from "../Headers";
import { NavLink } from "react-router-dom";
import "./style.css";

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
	return (
		<>
			<Headers />
			{props.sidebar ? (
				<Container fluid>
					<Row>
						<Col md={2} className='sidebar'>
							<ul className='list'>
								<li>
									<NavLink to={"/"}>Home</NavLink>
								</li>
								<li>
									<NavLink to={"/category"}>Category</NavLink>
								</li>
								<li>
									<NavLink to={"/product"}>Product</NavLink>
								</li>
								<li>
									<NavLink to={"/order"}>Orders</NavLink>
								</li>
								<li>
									<NavLink to={"/signin"}>Signin</NavLink>
								</li>
							</ul>
						</Col>
						<Col md={10} style={{ marginLeft: "auto" }}>
							{props.children}
						</Col>
					</Row>
				</Container>
			) : (
				props.children
			)}
		</>
	);
};

export default Layout;
