import { actionTypes } from './actions';

const initialState = {
    goDisabled: true
};

export default(state = initialState, payload = {}) => {
    switch (payload.type) {
    case actionTypes.SET_GO_DISABLED:
        return {
            ...state,
            goDisabled: payload.goDisabled
        };
    default:
        return state;
    }
};
