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
	<style>
	.Counter {
        width: 10rem;
        height: 10rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem;

        color: white;

        font-size: 3rem;

        border-radius: 100%;
        cursor: pointer;
        user-select: none;
        transition: background-color 0.75s;
    }
	</style>
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
<script data-plugins="transform-es2015-modules-umd,transform-es2015-arrow-functions" type="text/babel" src="./js/actions/ActionMethods.js"></script>
<script data-plugins="transform-es2015-modules-umd,transform-es2015-destructuring,transform-object-rest-spread" type="text/babel" src="./js/reducers/index.js"></script>

<script data-plugins="transform-es2015-modules-umd" type="text/babel" src="./js/components/QuickMenus.js"></script>
<script data-plugins="transform-es2015-modules-umd" type="text/babel" src="./js/components/ContactInformation.js"></script>
<script data-plugins="transform-es2015-modules-umd" type="text/babel" src="./js/components/DatetimeStamp.js"></script>
<script data-plugins="transform-es2015-modules-umd" type="text/babel" src="./js/components/Assignment.js"></script>
<script data-plugins="transform-es2015-modules-umd" type="text/babel" src="./js/components/ControlBox.js"></script>
<script data-plugins="transform-es2015-modules-umd" type="text/babel" src="./js/components/Counter.js"></script>
<script data-plugins="transform-es2015-modules-umd, transform-class-properties" type="text/babel" src="./js/components/CounterButton.js"></script>
<script data-plugins="transform-es2015-modules-umd, transform-class-properties" type="text/babel" src="./js/components/CounterOption.js"></script>

<script data-plugins="transform-es2015-modules-umd,transform-es2015-arrow-functions" type="text/babel" src="./js/containers/CounterContainer.js"></script>
<script data-plugins="transform-es2015-modules-umd,transform-es2015-arrow-functions" type="text/babel" src="./js/containers/CounterButtonContainer.js"></script>



<script data-plugins="transform-es2015-modules-umd" type="text/babel">
	const { Component  } = React;
	const { BrowserRouter, Route, Link, Switch } = ReactRouterDOM;
	const { createStore } = Redux;
	const { Provider } = ReactRedux;

	import reducers from './js/reducers/index.js';

	import ContactInformation from './js/components/ContactInformation.js';
	import ControlBox from './js/components/ControlBox.js';
	import QuickMenus from './js/components/QuickMenus.js';
	import CounterOption from './js/containers/CounterOption.js';
	import CounterContainer from './js/containers/CounterContainer.js';
	import CounterButtonContainer from './js/containers/CounterButtonContainer.js';


    import * as actions from './js/actions/ActionMethods.js';

	//var { Alert, FormGroup, ControlLabel, HelpBlock } = Reactstrap;
    // 스토어 생성
    const store = createStore(reducers);

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
		<BrowserRouter>

			<QuickMenus/>
			
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

			<div style={styleLeft}>
				<ContactInformation/>
				<BasicLoanInformation/>
				<CounterContainer/>
				<CounterOption/>
                <CounterButtonContainer/>
			</div>
			<div  style={styleRight}>
				<ControlBox/>
			</div>

			<Route exact path="/home" component={Home}/>
			<Route path="/about" component={About}/>
			
		</BrowserRouter>
		)
	}

	const Root = () => (
	    <Provider store={store}>
	        <App/>
        </Provider>
	)


	class CounterCtrl extends Component{ // React.Component
        constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
            this.state = {
                number: this.props.store.getState().counter.number
            }
        }

        onClick() {
            this.props.store.dispatch(actions.increment(2));

            this.setState({
              number: this.props.store.getState().counter.number
            });
        }

        render() {
            let centerStyle = {
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                MsUserSelect:'none',
                userSelect: 'none',
                cursor: 'pointer'
            };
            return (
                <div
                    onClick = {this.onClick}
                    style={centerStyle}
                >
                    {this.state.number}
                </div>
            )
        }
	}

	const Menu = (props) => (
		<div>
			<CounterCtrl store={props.store}/>
		</div>
	);


	ReactDOM.render(<Root/>, document.getElementById('root'));
    ReactDOM.render(<Menu store={store}/>, document.getElementById('menu'));

    /*
	const render = () => {
	    ReactDOM.render(<Menu store={store}/>, document.getElementById('menu'));
    };

	store.subscribe(render);
    render();
    */

</script>

</body>
</html>