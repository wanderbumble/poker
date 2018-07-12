import React from 'react';
import ReactDOM from 'react-dom';
import { PlayingCard } from '../index';

describe('PlayingCard render', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PlayingCard/>, div);
    });
});
