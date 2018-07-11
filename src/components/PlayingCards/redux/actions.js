export const actionTypes = {
    SET_REMOVE_ARRAY: 'PlayingCards/SET_REMOVE_ARRAY'
};

export const actions = {
    setRemoveArray: (removeArray) => {
        return {
            type: actionTypes.SET_REMOVE_ARRAY,
            removeArray
        };
    },
};
