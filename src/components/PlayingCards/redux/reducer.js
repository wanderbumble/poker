import { actionTypes } from './actions';

const initialState = {
    removeArray: []
};

export default(state = initialState, payload = {}) => {
    switch (payload.type) {
    case actionTypes.SET_REMOVE_ARRAY:
        return {
            ...state,
            removeArray: payload.removeArray
        };
    default:
        return state;
    }
};
