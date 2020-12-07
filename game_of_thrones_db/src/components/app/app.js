import React from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header/index.js";
import RandomChar from "../randomChar/index.js";
import ItemList from "../itemList/index.js";
import CharDetails from "../charDetails/index.js";

const App = () => {
	return (
		<>
			<Container>
				<Header></Header>
			</Container>
			<Container>
				<Row>
					<Col lg={{ size: 5, offset: 0 }}>
						<RandomChar></RandomChar>
					</Col>
				</Row>
				<Row>
					<Col md="6">
						<ItemList></ItemList>
					</Col>
					<Col md="6">
						<CharDetails></CharDetails>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default App;