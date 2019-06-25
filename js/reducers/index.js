import * as types from './js/actions/ActionTypes.js';

// 초기 상태를 정의합니다
const initialState = {
    number: 0
};

	
function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            // return {
            //     ...state,
            //     number: state.number + 1
            // };
            // 우리는 state 를 변경시키지 않습니다. 단, Object.assign() 메소드를 통하여 state를 복사 한후, 복사된 객체를 수정하여 반환합니다.
            // 첫번째 argument 는 꼭 비어있는 객체이어야 합니다.
            return Object.assign({}, state, {
                number: state.number + action.addBy
            })
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