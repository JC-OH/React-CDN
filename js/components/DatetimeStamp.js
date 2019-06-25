var { Container, Row, Col, Label } = Reactstrap;

var DatetimeStamp = (props) => {
	var date = new Date();
	return (
		<Container className="p-0 m-0">
			<Row>
				<Col xs="8"> <Label>{props.label}</Label></Col>
				<Col xs="4" className="px-0 pb-1">
					<Datetime dateFormat="MM/DD/YYYY" timeFormat={false} defaultValue={date} inputProps={{readOnly:true, disabled:true}}/>
				</Col>
			</Row>
		</Container>
	)
}

export default DatetimeStamp

