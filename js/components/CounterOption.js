const { connect } = ReactRedux;
import * as actions from './js/actions/ActionMethods.js';

class Option extends React.Component {

    state = {
        diff: 1
    }

    onChangeDiff = (e) => {
        if(isNaN(e.target.value))
            return;
        this.setState({ diff: e.target.value });

        if(e.target.value=='') {
            this.setState({ diff: '0' });
        }

        this.props.onUpdateDiff(parseInt(e.target.value));
    }

    render() {
        return (

            <div>
             <input type="text" value={ this.state.diff } onChange={this.onChangeDiff}></input>
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateDiff: (value) => dispatch(actions.setDiff(value))
    };
}

const CounterOption = connect(undefined, mapDispatchToProps)(Option);

export default CounterOption;
