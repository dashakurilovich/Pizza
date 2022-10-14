import { combineReducers } from 'redux';
import filterReducers from './filters';
import pizzasReducers from './pizzas';
import cartReducers from './cart';

export const rootReducer = combineReducers({
  filter: filterReducers,
  pizzas: pizzasReducers,
  cart: cartReducers,
});

