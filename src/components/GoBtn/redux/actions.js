export const actionTypes = {
    SET_GO_DISABLED: 'GoBtn/SET_GO_DISABLED'
};

export const actions = {
    setGoDisabled: (goDisabled) => {
        return {
            type: actionTypes.SET_GO_DISABLED,
            goDisabled
        };
    },
};
