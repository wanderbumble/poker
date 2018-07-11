import React, { Component } from 'react';
import DealBtn from '../DealBtn';
import GoBtn from '../GoBtn';
import ScoreBoard from '../ScoreBoard';
import PlayingCards from '../PlayingCards';

class PokerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                <h1>Playing poker!</h1>
                <DealBtn />
                <GoBtn />
                <ScoreBoard />
                <PlayingCards />
            </div>
        );
    }
}

export default PokerTable;
