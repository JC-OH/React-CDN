const { connect } = ReactRedux;
import * as actions from './js/actions/ActionMethods.js';

import CounterButton from './js/components/CounterButton.js';

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(actions.increment()),
        onDecrement: () => dispatch(actions.decrement())
    }
}

// 여기선 mapStateToProps 가 필요없으므로 undefined 를 전달하여 생략해줍니다.
const CounterButtonContainer = connect(undefined, mapDispatchToProps)(CounterButton);
export default CounterButtonContainer;