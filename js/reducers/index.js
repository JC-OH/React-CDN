import * as types from './js/actions/ActionTypes.js';

// 초기 상태를 정의합니다
const initialState = {
    number: 0
};

	
function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT: 
            return {
                ...state,
                number: state.number + 1
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }
};

export default counter;