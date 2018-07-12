import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { normalizeHand, processHand } from '../../utils/cardLogic';
import './styles/index.scss';

export class ScoreBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    calculateScore() {
        const handArray = this.props.handArray;
        const normalizedHandArray = handArray && normalizeHand(handArray);
        const score = normalizedHandArray && processHand(normalizedHandArray);

        return score;
    }

    render() {

        return (
            !this.props.dealDisabled && <div className='score-board'>Score { this.calculateScore() }</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        dealDisabled: state.DealBtn.dealDisabled,
        handArray: state.PokerTable.handArray
    };
}

export default connect(mapStateToProps)(ScoreBoard);

ScoreBoard.propTypes = {
    dealDisabled: PropTypes.bool,
    handArray: PropTypes.array
};
