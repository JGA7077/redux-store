import {combineReducers} from 'redux';
import cartReducer from './cart/reducer';

export interface RootReducer {
  cartReducer: {
    products: [],
    productsTotalPrice: number
  }
}

const rootReducer = combineReducers({cartReducer})

export default rootReducer;