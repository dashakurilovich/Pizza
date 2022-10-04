import { combineReducers } from 'redux';
import filterReducers from './filters';
import pizzasReducers from './pizzas';


export const rootReducer = combineReducers({
  filter: filterReducers,
  pizzas: pizzasReducers,
});

