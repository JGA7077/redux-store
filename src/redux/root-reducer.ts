import {combineReducers} from 'redux';
import cartReducer from './cart/reducer';
import { ProductItem } from "@/components/ProductsList";

export interface RootReducer {
  cartReducer: {
    products: ProductItem[],
    productsTotalPrice: number
  }
}

const rootReducer = combineReducers({cartReducer})

export default rootReducer;