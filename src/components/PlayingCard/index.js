import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as playingCardsActions } from '../PlayingCards/redux/actions';
import { normalizeCard,
    symbolForCardNumber,
    suitForCard,
    cardColor} from '../../utils/cardLogic';
import PropTypes from 'prop-types';
import './styles/index.scss';

class PlayingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    updateRemoveArray = cardNumber => e => {
        e.preventDefault;

        //If the deal button isn't disabled we cannot select cards to remove.
        if (!this.props.dealDisabled) {
            return;
        }

        let removeArray = this.props.removeArray;
        const cardNumberIndex = removeArray.indexOf(this.props.cardNumber);

        if (cardNumberIndex !== -1) {
            removeArray = removeArray.filter(cardNum => cardNum !== cardNumber);
        } else {
            removeArray = removeArray.concat([cardNumber]);
        }

        this.props.setRemoveArray(removeArray);
    }

    render() {
        const cardNumber = this.props.cardNumber;
        const removeArray = this.props.removeArray;
        const cardNumberIndex = removeArray.indexOf(cardNumber);
        const removeCardClass = cardNumberIndex >= 0 ? 'playing-card-remove' : '';
        const normalizeCardNumber = normalizeCard(cardNumber);
        const cardSymbol = symbolForCardNumber(normalizeCardNumber);
        const cardSuit = suitForCard(cardNumber);
        const cardColorClass = cardColor(cardNumber) == 'red' ? 'playing-card-suit--red' : '';

        return (
            <div
                className={`playing-card ${removeCardClass} ${cardColorClass}`}
                onClick={this.updateRemoveArray(cardNumber)}>
                <div className='playing-card-graphic'>{ cardSymbol } <span className='playing-card-suit'>{ cardSuit }</span></div>
                <div className='playing-card-graphic playing-card-graphic--bottom'>{ cardSymbol } <span className='playing-card-suit'>{ cardSuit }</span></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        dealDisabled: state.DealBtn.dealDisabled,
        removeArray: state.PlayingCards.removeArray
    };
}
function mapDispatchToProps(dispatch) {
    return {
        setRemoveArray: bindActionCreators(playingCardsActions.setRemoveArray, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayingCard);

PlayingCard.propTypes = {
    cardNumber: PropTypes.number,
    dealDisabled: PropTypes.bool,
    removeArray: PropTypes.array,
    setRemoveArray: PropTypes.func
};
