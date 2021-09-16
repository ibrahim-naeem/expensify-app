import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';

import "react-dates/lib/css/_datepicker.css";



const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById("root"));





const expensOne = store.dispatch(addExpense({ description: 'Car', amount: 12000,  createdAt: 3000 }))
const expensTwo = store.dispatch(
  addExpense({ description: "House", amount: 5000, createdAt: 5000 })
);
const expensThree = store.dispatch(
  addExpense({ description: "Building", amount: 7000, createdAt: 7000 })
);


// store.dispatch(setTextFilter('house'))
// store.dispatch(sortByAmount())
