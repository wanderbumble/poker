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
                <div>When a cards border turns blue after clicking on it the card
                     is set to be discarded when the user clicks the Go button.
                     To change it back simply click the card again.
                </div>
                <DealBtn />
                <GoBtn />
                <ScoreBoard />
                <PlayingCards />
            </div>
        );
    }
}

export default PokerTable;
