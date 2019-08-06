import { createStore } from "redux";

// Action Generators -- Functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
})

const resetCount = () => ({
    type: "RESET"
})

const setCount = ({ count }) => ({
    type: "SET",
    count 
})


// Reducers
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "SET":
            return {
                count: action.count
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);


store.subscribe(() => {
    console.log(store.getState());
});

// Increment
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

// Reset
store.dispatch(resetCount());

// Set
store.dispatch(setCount({ count: 101 }));

// Decrement
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));


export default store;