import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout";

/**
 * @author
 * @function Category
 **/

const Category = (props) => {
	return (
		<Layout sidebar>
			<Container>
				<Row>
					<Col md={12}>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								marginTop: "10px",
							}}
						>
							<h3>Category</h3>
							<button>ADD</button>
						</div>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default Category;
