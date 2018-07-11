import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './redux/actions';
import { actions as pokerActions } from '../PokerTable/redux/actions';
import { actions as dealActions } from '../DealBtn/redux/actions';
import { actions as playingCardsActions } from '../PlayingCards/redux/actions';
import PropTypes from 'prop-types';

class GoBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    showMeTheMoney = e => {
        e.preventDefault;

        let { removeArray, handArray, deckArray } = this.props;
        let newHandArray = [];

        if (removeArray.length > 0) {
            //We look through the current handArray and remove any of the cards the user doesn't want.
            newHandArray = handArray.filter(cardNum => {
                let canKeepCard = true;

                removeArray.map( removeCardNum => {
                    if(removeCardNum === cardNum) {
                        canKeepCard = false;
                        return;
                    }
                });

                return canKeepCard && cardNum;
            });

            //Extract the new cards from the current deck.
            const newCardsArray = deckArray.slice(0, removeArray.length);

            this.props.setHandArray(newHandArray.concat(newCardsArray));
            this.props.setDealDisabled(false);
            this.props.setGoDisabled(true);
            this.props.setRemoveArray([]);
        }
    }

    render() {
        return (
            !this.props.goDisabled && <button className="btn-go" onClick={this.showMeTheMoney}>Go</button>
        );
    }
}

function mapStateToProps(state) {
    return {
        deckArray: state.PokerTable.deckArray,
        goDisabled: state.GoBtn.goDisabled,
        handArray: state.PokerTable.handArray,
        removeArray: state.PlayingCards.removeArray

    };
}
function mapDispatchToProps(dispatch) {
    return {
        setDealDisabled: bindActionCreators(dealActions.setDealDisabled, dispatch),
        setGoDisabled: bindActionCreators(actions.setGoDisabled, dispatch),
        setHandArray: bindActionCreators(pokerActions.setHandArray, dispatch),
        setRemoveArray: bindActionCreators(playingCardsActions.setRemoveArray, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(GoBtn);

GoBtn.propTypes = {
    deckArray: PropTypes.array,
    goDisabled: PropTypes.bool,
    handArray: PropTypes.array,
    removeArray: PropTypes.array,
    setDealDisabled: PropTypes.func,
    setGoDisabled: PropTypes.func,
    setRemoveArray: PropTypes.func,
    setHandArray: PropTypes.func
};
