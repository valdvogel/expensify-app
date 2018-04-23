import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
//import './playground/promises';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading Page...</p>, document.getElementById('app'));


store.dispatch(startSetExpense()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('user in');
    }
    else {
        console.log('user out');
    }
});
