import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";
import "./style.css";

/**
 * @author prashant khanal
 * @function Home
 **/

const Home = (props) => {
	return <Layout sidebar></Layout>;
};

export default Home;
