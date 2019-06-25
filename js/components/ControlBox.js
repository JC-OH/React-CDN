import DatetimeStamp from './js/components/DatetimeStamp.js';
import Assignment from './js/components/Assignment.js';


var HistoryList = () => (
	<div>
		History List
		<DatetimeStamp label="Application Date"/>
		<DatetimeStamp label="Submitted"/>
		<DatetimeStamp label="LE Issued"/>
		<DatetimeStamp label="Int. to Proceed Date"/>
		<DatetimeStamp label="Title Order"/>
	</div>
)


var ControlBox = () => (
	<div>
		Control Box
		
		<HistoryList/>
		<Assignment/>
		<Assignment/>
	</div>
)

export default ControlBox

