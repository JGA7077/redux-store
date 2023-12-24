import { ProductItem } from "@/components/ProductsList";
import CartActionTypes from "./action-types";

const initialState = {
  products: [],
  productsTotalPrice: 0
};

export interface Action {
  type: string;
  payload: ProductItem;
}

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const productIsOnCart = state.products.some(
        (product: ProductItem) => product.id === action.payload.id
      )

      if (productIsOnCart) {
        return {
          ...state,
          products: state.products.map((product: ProductItem) =>
            product.id === action.payload.id
              ? {...product, quantity: product?.quantity + 1}
              : product
        )}
      }

      return {
        ...state,
        products: [...state.products, {...action.payload, quantity: 1}]
      }
  
    default:
      return state
  }
}

export default cartReducer;