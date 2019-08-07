import React, { Component } from "react";
import { Provider } from "react-redux";

import configureStore from "./store/configStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import AppRouter from "./router/AppRouter";



class App extends Component {

    render() {

        const store = configureStore();

        store.dispatch(addExpense({ description: "Water bill", amount: 3400 }))
        store.dispatch(addExpense({ description: "Gas bill" }))
        store.dispatch(setTextFilter("water"));

        setTimeout(() => {
            store.dispatch(setTextFilter("bill"));
        }, 3000);

        const state = store.getState();
        const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

        console.log(visibleExpenses);

        const jsx = (
            <Provider store={ store }>
                <AppRouter />
            </Provider>
        )
        return (
            <div>
                { jsx }
            </div>
        )
    }
}

export default App;

