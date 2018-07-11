import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './redux/actions';
import { actions as pokerActions } from '../PokerTable/redux/actions';
import { actions as goActions } from '../GoBtn/redux/actions';
import PropTypes from 'prop-types';

class DealBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    dealNewDeck = e => {
        e.preventDefault;
        const newDeckArray = [];

        //Create a new deck of 52 cards.
        for (var i=0; i< 52 ;i++) {
            newDeckArray.push(i+1);
        }

        //Here we shuffle the deck.
        newDeckArray.sort( () => 0.5 - Math.random() );

        //Here we get the user's first hand from the deck.
        const newHand = newDeckArray.slice(0, 5);

        //Here we remove the users hand from the deck.
        const updatedDeck = newDeckArray.slice(5, newDeckArray.length);

        this.props.setDeckArray(updatedDeck);
        this.props.setHandArray(newHand);
        this.props.setDealDisabled(true);
        this.props.setGoDisabled(false);
    }

    render() {

        return (
            <button className="btn-deal" disabled={this.props.dealDisabled} onClick={this.dealNewDeck}>Deal</button>
        );
    }
}

function mapStateToProps(state) {
    return {
        dealDisabled: state.DealBtn.dealDisabled,
        deckArray: state.PokerTable.deckArray,
        goDisabled: state.GoBtn.goDisabled
    };
}
function mapDispatchToProps(dispatch) {
    return {
        setDealDisabled: bindActionCreators(actions.setDealDisabled, dispatch),
        setDeckArray: bindActionCreators(pokerActions.setDeckArray, dispatch),
        setGoDisabled: bindActionCreators(goActions.setGoDisabled, dispatch),
        setHandArray: bindActionCreators(pokerActions.setHandArray, dispatch)

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(DealBtn);

DealBtn.propTypes = {
    dealDisabled: PropTypes.bool,
    deckArray: PropTypes.array,
    goDisabled: PropTypes.bool,
    setDealDisabled: PropTypes.func,
    setDeckArray: PropTypes.func,
    setGoDisabled: PropTypes.func,
    setHandArray: PropTypes.func
};
