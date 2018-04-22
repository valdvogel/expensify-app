import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routes/AppRouter'
import configureStore from './store/configureStore'
import {startSetExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';
//import './playground/promises';


const store = configureStore();



//store.dispatch(addExpense({description: 'water', notes:'', amount:1,createdAt:300}));
//store.dispatch(addExpense({description: 'gas', notes:'', amount:2,createdAt:200}));
//store.dispatch(addExpense({description: 'rent', notes:'', amount:1900,createdAt:100}));


//const state= store.getState();
//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);



const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(<p>Loading Page...</p>, document.getElementById('app'));



store.dispatch(startSetExpense()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'));
});

