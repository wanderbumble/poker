import React from 'react';
import ReactDOM from 'react-dom';
import PokerTable from '../index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../reducers';
import { actionTypes } from '../redux/actions';
import reducer from '../redux/reducer';

describe('PokerTable render', () => {
    const store = createStore(rootReducer);

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Provider store={store}><PokerTable/></Provider>, div);
    });
});

describe('PokerTable action types', () => {
    it('defines an action type for SET_DECK_ARRAY', () => {
        const type = actionTypes.SET_DECK_ARRAY;
        expect(type).toBeDefined();
    });

    it('defines an action type for SET_HAND_ARRAY', () => {
        const type = actionTypes.SET_HAND_ARRAY;
        expect(type).toBeDefined();
    });
});

describe('PokerTable reducer', () => {
    it('should return the initial state', () => {
        const initialState = reducer(undefined, {});
        const expectedState = {
            deckArray: [],
            handArray: []
        };
        expect(initialState).toEqual(expectedState);
    });
});
