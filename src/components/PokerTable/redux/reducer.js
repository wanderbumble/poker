import { actionTypes } from './actions';

const initialState = {
    deckArray: [],
    handArray: []
};

export default(state = initialState, payload = {}) => {
    switch (payload.type) {
    case actionTypes.SET_DECK_ARRAY:
        return {
            ...state,
            deckArray: payload.deckArray
        };
    case actionTypes.SET_HAND_ARRAY:
        return {
            ...state,
            handArray: payload.handArray
        };
    default:
        return state;
    }
};
