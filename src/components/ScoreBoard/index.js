import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { normalizeHand, processHand } from '../../utils/cardLogic';
import './styles/index.scss';

class ScoreBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    calculateScore() {
        const normalizedHandArray = normalizeHand(this.props.handArray);
        const score = normalizedHandArray && processHand(normalizedHandArray);
        
        return score;
    }

    render() {

        return (
            <div className='score-board'>Score { this.calculateScore() }</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        handArray: state.PokerTable.handArray
    };
}

export default connect(mapStateToProps)(ScoreBoard);

ScoreBoard.propTypes = {
    handArray: PropTypes.array
};
