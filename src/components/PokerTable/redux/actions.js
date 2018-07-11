export const actionTypes = {
    SET_DECK_ARRAY: 'PokerTable/SET_DECK_ARRAY',
    SET_HAND_ARRAY: 'PokerTable/SET_HAND_ARRAY'
};

export const actions = {
    setDeckArray: (deckArray) => {
        return {
            type: actionTypes.SET_DECK_ARRAY,
            deckArray
        };
    },
    setHandArray: (handArray) => {
        return {
            type: actionTypes.SET_HAND_ARRAY,
            handArray
        };
    }
};
