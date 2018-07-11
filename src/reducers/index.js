import { combineReducers } from 'redux';
import PokerTable from '../components/PokerTable/redux/reducer';
import DealBtn from '../components/DealBtn/redux/reducer';
import GoBtn from '../components/GoBtn/redux/reducer';
import PlayingCards from '../components/PlayingCards/redux/reducer';

const rootReducer = combineReducers({
    PokerTable,
    DealBtn,
    GoBtn,
    PlayingCards
});

export default rootReducer;
