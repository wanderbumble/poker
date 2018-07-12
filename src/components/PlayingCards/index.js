import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './redux/actions';
import PlayingCard from '../PlayingCard';
import PropTypes from 'prop-types';
import './styles/index.scss';

export class PlayingCards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderPlayingCards() {
        const handArray = this.props.handArray;

        return handArray && handArray.map( cardNumber =>
            <PlayingCard key={cardNumber} cardNumber={cardNumber} />
        );
    }

    render() {

        return (
            <div className="playing-cards">
                { this.renderPlayingCards() }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        handArray: state.PokerTable.handArray
    };
}
function mapDispatchToProps(dispatch) {
    return {
        setRemoveArray: bindActionCreators(actions.setRemoveArray, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayingCards);

PlayingCards.propTypes = {
    handArray: PropTypes.array,
    setRemoveArray: PropTypes.func
};
