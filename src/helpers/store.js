import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import pokemonsReducer from '../reducers/pokemons'

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    combineReducers({
        pokemons: pokemonsReducer
    }),
    composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);
