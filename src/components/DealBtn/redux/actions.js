export const actionTypes = {
    SET_DEAL_DISABLED: 'DealBtn/SET_DEAL_DISABLED'
};

export const actions = {
    setDealDisabled: (dealDisabled) => {
        return {
            type: actionTypes.SET_DEAL_DISABLED,
            dealDisabled
        };
    }
};
