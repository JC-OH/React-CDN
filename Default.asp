<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
	<script crossorigin src="https://unpkg.com/prop-types@15.7.2/prop-types.min.js"></script>
	<script crossorigin src="https://unpkg.com/classnames@2.2.6/index.js"></script>
	<script crossorigin src="https://unpkg.com/moment@2.24.0/moment.js"></script>

	<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
	<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
	<script crossorigin src="https://unpkg.com/react-router@5.0.1/umd/react-router.min.js"></script>
	<script crossorigin src="https://unpkg.com/react-router-dom@5.0.1/umd/react-router-dom.min.js"></script>
	<script crossorigin src="https://unpkg.com/redux@4.0.1/dist/redux.min.js"></script>
	<script crossorigin src="https://unpkg.com/react-redux@5.0.7/dist/react-redux.min.js"></script>
	<!--<script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.32.4/react-bootstrap.js"></script>-->
	<script crossorigin src="https://unpkg.com/react-transition-group@4.1.1/dist/react-transition-group.min.js"></script>
	<script crossorigin src="https://unpkg.com/react-onclickoutside@4.7.1/index.js"></script>
	<!--<script crossorigin src="https://unpkg.com/react-router@3.0.2/umd/ReactRouter.min.js"></script>-->
	
	<script crossorigin src="https://unpkg.com/react-datetime@2.16.3/dist/react-datetime.min.js"></script>
	<script crossorigin src="https://unpkg.com/reactstrap@6.0.1/dist/reactstrap.min.js"></script>
	
	<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
	<link rel="stylesheet" href="https://unpkg.com/react-datetime@2.16.3/css/react-datetime.css" crossorigin="anonymous"/>
	
	<title></title>
</head>

<body>

<table height="100%" border="0">
<tbody>
<tr>
	<td width="165" align="left" valign="top">
	<div id="menu"></div>
	</td>
	<td width="835" align="left">
	<div id="root"></div>
	</td>
</tr>
</tbody>
</table>

<script data-plugins="transform-es2015-modules-umd" type="text/babel" src="./js/actions/ActionTypes.js"></script>
<script data-plugins="transform-es2015-modules-umd" type="text/babel" src="./js/components/QuickMenus.js"></script>
<script data-plugins="transform-es2015-modules-umd" type="text/babel" src="./js/components/ContactInformation.js"></script>
<script data-plugins="transform-es2015-modules-umd" type="text/babel" src="./js/components/DatetimeStamp.js"></script>
<script data-plugins="transform-es2015-modules-umd" type="text/babel" src="./js/components/Assignment.js"></script>
<script data-plugins="transform-es2015-modules-umd" type="text/babel" src="./js/components/ControlBox.js"></script>
<script data-plugins="transform-es2015-modules-umd" type="text/babel" src="./js/components/Counter.js"></script>



<script data-plugins="transform-es2015-modules-umd" type="text/babel">
	const { BrowserRouter, Route, Link, Switch } = ReactRouterDOM;
	import * as types from './ActionTypes';
	import ContactInformation from './js/components/ContactInformation.js';
	import ControlBox from './js/components/ControlBox.js';
	import QuickMenus from './js/components/QuickMenus.js';


	//var { Alert, FormGroup, ControlLabel, HelpBlock } = Reactstrap;

	const BasicLoanInformation = () => (
		<div>
			Basic Loan Information
		</div>
	)

	const Home = () => {
		return (
			<div>
				<h2>
					Home
				</h2>
			</div>
		);
	};

	const About = () => {
		return (
			<div>
				<h2>About</h2>
			</div>
		);
	};

	const App = () => {
		var styleLeft = {
			float: 'left',
			width: '65%',
		};

		var styleRight =  {
			  float: 'left',
			  width: '35%',
		}

		return (
		<div>
			<QuickMenus/>
			
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

			<div style={styleLeft}>
				<ContactInformation/>
				<BasicLoanInformation/>
			</div>
			<div  style={styleRight}>
				<ControlBox/>
			</div>

			
			<Route exact path="/home" component={Home}/>
			<Route path="/about" component={About}/>
			
		</div>
		)
	}

	const Root = () => (
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	)

	const Menu = () => (
		<div>
			Menu
		</div>
	)

	ReactDOM.render(<Root/>, document.getElementById('root'));
	
	ReactDOM.render(<Menu/>, document.getElementById('menu'));

</script>

</body>
</html>