import React from "react";
import { Col, Row, Container, Button } from "reactstrap";
import Header from "../header/index.js";
import RandomChar from "../randomChar/index.js";
import ItemList from "../itemList/index.js";
import CharDetails from "../charDetails/index.js";

const SwitchRandomChar = () => {
	return
}

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
						<Button color="primary" size="lg" block>Show/hide Random Character</Button>
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