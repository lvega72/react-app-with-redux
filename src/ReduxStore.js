import {createStore} from 'redux';

const initialReduxState = [];    

const reduxReducer = (state = initialReduxState, action) => {

    console.log("ReduxReducer called. Action is:", action)
    console.log("current state is:", state)
    const {type, name, favoriteColor} = action;

    if (type === "ADD_USER") {
        return [
            ...state,
            { name, favoriteColor }
        ]

    } else {
        return state;   
    }
}

const reduxStore = createStore(reduxReducer);

export default reduxStore;
