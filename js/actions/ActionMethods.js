/*
    action 객체를 만드는 액션 생성자들을 선언합니다. (action creators)
    여기서 () => ({}) 은, function() { return { } } 와 동일한 의미입니다.
    scope 이슈와 관계 없이 편의상 사용되었습니다.
*/

import * as types from './js/actions/ActionTypes.js';


// export const increment = () => ({
//     type: types.INCREMENT
// });
//
// export const decrement = () => ({
//     type: types.DECREMENT
// });

// INCREMENT: 카운터의 값을 올린다
export const increment = function(diff) {
    return {
        type: types.INCREMENT,
        addBy: diff

    }
}

// DECREMENT: 카운터의 값을 낮춘다
export const decrement = function() {
    return {
        type: types.DECREMENT
    }
}

// SET_DIFF: 버튼이 눌릴 때 더하거나 뺄 값을 설정한다
export function setDiff(value) {
    return {
        type: types.SET_DIFF,
        diff: value
    }
}