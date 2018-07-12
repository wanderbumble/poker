import React from 'react';
import ReactDOM from 'react-dom';
import { DealBtn } from '../index';
import { actionTypes } from '../redux/actions';

describe('DealBtn shallow render', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DealBtn/>, div);
    });
});

describe('DealBtn action types', () => {
    it('defines an action type for SET_DEAL_DISABLED', () => {
        const type = actionTypes.SET_DEAL_DISABLED;
        expect(type).toBeDefined();
    });
});
