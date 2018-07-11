import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import PokerTable from './components/PokerTable';
import rootReducer from './reducers';
import './styles/index.scss';

const store = createStore(rootReducer);

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <PokerTable />
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
};

render();

// Hot reloading
if (module.hot) {
    // Reload components
    module.hot.accept('./components/PokerTable', () => {
        render();
    });

    // Reload reducers
    module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer);
    });
}
