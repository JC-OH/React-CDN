var { Container, Row, Col, Label, FormGroup, Input } = Reactstrap;

var Assignment = () => (
		<Container className="p-0 m-0">
			<Row>
				<Col className="pr-0 pb-1">
					<FormGroup>
						<Label for="exampleSelectMulti" >Select Multiple</Label>
						<Input type="select" name="" id="" disabled>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						</Input>
					</FormGroup>
				</Col>
			</Row>
		</Container>
)

export default Assignment

