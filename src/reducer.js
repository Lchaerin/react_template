import { INCREASE } from './actionType';

// initial state for redux
const initialState = {
    count : 0
};

// reducer copies the original state, 
// modify it according to the action and return the modified state
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return Object.assign({}, state, {
                count : state.count + action.amount 
            });
    
        default:
            return state;
    }
}