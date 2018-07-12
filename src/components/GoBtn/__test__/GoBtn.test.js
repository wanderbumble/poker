import React from 'react';
import ReactDOM from 'react-dom';
import { GoBtn } from '../index';
import { actionTypes } from '../redux/actions';

describe('GoBtn shallow render', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GoBtn/>, div);
    });
});

describe('GoBtn action types', () => {
    it('defines an action type for SET_GO_DISABLED', () => {
        const type = actionTypes.SET_GO_DISABLED;
        expect(type).toBeDefined();
    });
});
