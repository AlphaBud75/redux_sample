



import { combineReducers } from 'react-redux'



export function createReducer(injectedReducers) {

    if (Object.keys(injectedReducers).length === 0 ) {
        return state => state;
    } else {
        return combineReducers({
            ...injectedReducers,
        });
    }
}