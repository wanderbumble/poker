import React from 'react';
import ReactDOM from 'react-dom';
import { PlayingCards } from '../index';
import { actionTypes } from '../redux/actions';
import reducer from '../redux/reducer';

describe('PlayingCards shallow render', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PlayingCards/>, div);
    });
});

describe('PlayingCards action types', () => {
    it('defines an action type for SET_REMOVE_ARRAY', () => {
        const type = actionTypes.SET_REMOVE_ARRAY;
        expect(type).toBeDefined();
    });
});

describe('PlayingCards reducer', () => {
    it('should return the initial state', () => {
        const initialState = reducer(undefined, {});
        const expectedState = {
            removeArray: []
        };
        expect(initialState).toEqual(expectedState);
    });
});
