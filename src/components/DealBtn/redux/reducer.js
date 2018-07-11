import { actionTypes } from './actions';

const initialState = {
    dealDisabled: false
};

export default(state = initialState, payload = {}) => {
    switch (payload.type) {
    case actionTypes.SET_DEAL_DISABLED:
        return {
            ...state,
            dealDisabled: payload.dealDisabled
        };
    default:
        return state;
    }
};
